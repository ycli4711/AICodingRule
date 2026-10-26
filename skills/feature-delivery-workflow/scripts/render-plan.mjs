#!/usr/bin/env node
// Render one Markdown source into a self-contained, offline review document.
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';
import { createRequire } from 'node:module';
import { createHash } from 'node:crypto';

const args = process.argv.slice(2);
const moduleAt = args.indexOf('--modules');
const modules = moduleAt >= 0 ? args.splice(moduleAt, 2)[1] : process.env.WORKFLOW_NODE_MODULES;
const [input, output] = args;
if (!input || !output || args.length !== 2 || path.resolve(input) === path.resolve(output)) {
  console.error('Usage: node render-plan.mjs source.md output.html [--modules /absolute/node_modules]');
  process.exit(1);
}
let marked;
try {
  const require = createRequire(modules ? path.join(path.resolve(modules), '_resolver.cjs') : import.meta.url);
  ({ marked } = await import(pathToFileURL(require.resolve('marked')).href));
} catch {
  console.error('Cannot find marked. Locate the bundled workspace dependencies and pass --modules; do not install project dependencies for document rendering.');
  process.exit(1);
}
const escape = s => String(s).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const source = fs.readFileSync(input, 'utf8').replace(/^\uFEFF/, '');
const digest = createHash('sha256').update(source).digest('hex');
const toc = [];
const ids = new Map();
const plain = s => s.replace(/<[^>]*>/g, '').replace(/[`*_]/g, '');
function highlight(code, lang) {
  if (!['json','sql','powershell','sh','bash'].includes(lang)) return escape(code);
  // A lightweight offline lexer: strings/comments first, then keywords/numbers.
  const pattern = /("(?:\\.|[^"\\])*"|'(?:''|\\.|[^'\\])*'|--[^\n]*|#[^\n]*|\b(?:SELECT|FROM|WHERE|ALTER|TABLE|ADD|COLUMN|UPDATE|SET|DELETE|INSERT|INTO|VALUES|CREATE|DROP|INDEX|NULL|NOT|DEFAULT|BEGIN|COMMIT|ROLLBACK|AND|OR|AS|IS|JOIN|ON|true|false|null)\b|\b\d+(?:\.\d+)?\b)/gi;
  let result = '', cursor = 0;
  for (const match of code.matchAll(pattern)) {
    result += escape(code.slice(cursor, match.index));
    const token = match[0];
    const kind = /^['"]/.test(token) ? 'string' : /^(--|#)/.test(token) ? 'comment' : /^\d/.test(token) ? 'number' : 'keyword';
    result += `<span class="tok-${kind}">${escape(token)}</span>`;
    cursor = match.index + token.length;
  }
  return result + escape(code.slice(cursor));
}
const renderer = {
  heading({tokens, depth, text}) {
    const label = plain(text);
    const base = label.toLowerCase().replace(/[^\p{L}\p{N}]+/gu, '-').replace(/^-|-$/g, '');
    const count = ids.get(base) || 0; ids.set(base, count + 1);
    const id = count ? `${base}-${count}` : base;
    if (depth === 2 || depth === 3) toc.push({depth, id, label});
    return `<h${depth} id="${escape(id)}">${this.parser.parseInline(tokens)}</h${depth}>\n`;
  },
  html({text}) { return escape(text); },
  link({href, title, tokens}) {
    const safe = /^(https?:|mailto:|#)/i.test(href) || !/^[a-z][a-z0-9+.-]*:/i.test(href);
    const label = this.parser.parseInline(tokens);
    return safe ? `<a href="${escape(href)}"${title ? ` title="${escape(title)}"` : ''}>${label}</a>` : label;
  },
  image({text}) { return `<span>${escape(text)}</span>`; },
  code({text, lang}) {
    const language = (lang || 'text').split(/\s/)[0].toLowerCase();
    return `<div class="code-panel"><div class="code-toolbar"><span>${escape(language.toUpperCase())}</span><button type="button" class="copy" aria-label="复制完整代码">复制</button></div><pre tabindex="0"><code class="language-${escape(language)}">${highlight(text, language)}</code></pre></div>\n`;
  },
  blockquote({tokens}) {
    const body = this.parser.parse(tokens);
    const warning = /待决定|待确认|风险|注意|尚不确定|待澄清/.test(body);
    return `<aside class="callout ${warning ? 'warning' : 'info'}">${body}</aside>\n`;
  }
};
marked.use({renderer, gfm:true, breaks:false});
let body = marked.parse(source);
body = body.replace(/<table>/g, '<div class="table-scroll" tabindex="0"><table>').replace(/<\/table>/g, '</table></div>');
// Each topic is a visible card. Technical appendix cards use a muted surface.
body = body.replace(/(<h2 id="[^"]+">)([^<]*)/g, (_, start, title) => `</section><section class="topic${/技术|接口|命令|证据|文件影响/.test(title) ? ' technical' : ''}">${start}${title}`);
body = `<section class="intro">${body}</section>`;
const title = plain(source.match(/^#\s+(.+)$/m)?.[1] || path.basename(input));
const nav = toc.map(x => `<a class="level-${x.depth}" href="#${escape(x.id)}">${escape(x.label)}</a>`).join('\n');
const template = fs.readFileSync(new URL('../assets/plan.html', import.meta.url), 'utf8');
const replacements = {TITLE:escape(title), BODY:body, TOC:nav, HASH:digest, SOURCE:escape(path.basename(input))};
const html = template.replace(/\{\{(TITLE|BODY|TOC|HASH|SOURCE)\}\}/g, (_, key) => replacements[key]);
fs.mkdirSync(path.dirname(path.resolve(output)), {recursive:true});
fs.writeFileSync(output, html, 'utf8');
console.log(JSON.stringify({output:path.resolve(output), sourceSha256:digest, headings:toc.length}));
