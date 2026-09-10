# 个人开发规范与 skill

`AGENTS.md` 保存通用规则；`skills/controlled-development/` 保存可审查的业务开发流程、方案模板、SQL 检查和冻结用户示例。

## 两台电脑使用同一版本

每台电脑先将本仓库克隆到自己长期保存的位置。需要 GitHub 仓库访问权限。

```powershell
git clone git@github.com:ycli4711/personal_information.git
cd personal_information
./install-skill.ps1
```

安装脚本默认使用 `CODEX_HOME`，未设置时使用用户目录中的 `.codex`。可传 `-CodexDirectory` 指定目录，或用 `-WhatIf` 预览。它只安装 `controlled-development`，不覆盖本机 AGENTS.md、凭证或其他 skill；已有版本变化时先备份到 `skill-backups`。保留目标目录中的额外文件，不执行删除。

开发任务前同步：

```powershell
git status --short
git pull --ff-only
./install-skill.ps1
```

若有本地改动或拉取失败，先处理差异，不执行强制重置。只在拉取成功后安装。修改应在仓库源文件中进行；更新安装版前先将本机直接修改的内容合并回仓库。提交并推送后，另一台才可拉取；脚本不自动提交、推送、拉取，也不是保存即实时同步。

仓库 AGENTS.md 如需作为用户级规则，应先与本机版本比较再合并；安装脚本故意不覆盖它。AGENTS.md 中的相对引用以仓库根目录为准，独立复制时以已安装 skill 为入口。

安装后在新任务中显式使用 `$controlled-development` 并确认已加载。文件安装成功不保证现有会话热加载，也不保证自动选择总能命中。

## 第一版验收与迭代

结构校验只验证 skill 格式，不代表真实开发行为已经验收。用实际小功能或 Bug 检查：是否事前讲清顺序和数据变化；伪 SQL 是否有结构及索引依据；是否区分隔离测试与真实操作；交付是否列出计划差异。根据具体遗漏小步调整，不把示例业务规则推广到所有任务。
