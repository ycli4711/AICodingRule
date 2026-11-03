---
name: feature-delivery-workflow
description: "Explicit invocation only. Use when a user requests coordinated delivery of business features in existing projects, especially multiple features or service, Web, App and other clients across repositories, with interaction and API review, integration, acceptance or interrupted-work recovery. Supports sentence, document, screenshot and prototype inputs. Do not activate from ordinary development requests or indirect references; supporting roles may be used within an explicitly requested feature-delivery-workflow."
---

# 通用功能交付

## 启用边界

仅用户明确点名时启用；普通任务、实施确认及技能维护不触发工作流。首次使用读取 [启用边界](references/feature-design.md#技能启用边界)。主控负责范围、授权、依赖、协作和完成判断，具体实现遵循仓库规范；简单问答、文案或明确低风险小修复采用普通处理。

## 公共规则入口

首次使用读取 [按需加载与前置关口](references/coordination.md#按需加载与前置关口)，再按当前阶段读取下表。中途接手须补核前置条件；已读有效内容复用。

| 当前阶段 | 必读范围 |
| --- | --- |
| 核查与需求 | [需求与统一方案](references/feature-design.md#需求与统一方案)、[仓库规范](references/coordination.md#各仓库规范加载与落实)、[只读核查](references/coordination.md#只读核查与任务关联性) |
| 编写并交付方案 | [唯一授权规则](references/feature-design.md#唯一授权规则)、[记录](references/feature-design.md#精简记录与反馈)、[方案编写](references/plan-writing.md)、[验证安排](references/acceptance.md#一份验证安排)；主工作流方案还须读取 [分支规则](references/coordination.md#分支与运行环境)、[人工验收条件](references/acceptance.md#工程完成与人工验收)、[远程保全条件](references/closeout.md#合并后先推送再清理)，据此写明完整执行与收尾范围；其余清理细则到执行前读取 |
| 实施 | 核对 [唯一授权规则](references/feature-design.md#唯一授权规则) 的交付、确认依据及操作范围；读取 [分支与运行环境](references/coordination.md#分支与运行环境)、[执行效率](references/coordination.md#执行效率) 和适用项目规范 |
| 自测、审核、验证 | [验证安排](references/acceptance.md#一份验证安排)、[证据有效性](references/acceptance.md#证据有效性与增量检查)、[缺陷与证据](references/acceptance.md#缺陷与证据) |
| 人工验收 | [工程完成与人工验收](references/acceptance.md#工程完成与人工验收)，含同步交付代码验收材料 |
| 提交、整合及清理 | [收尾细则](references/closeout.md)，仅执行已授权且满足关口的步骤 |

页面任务在方案、实施及验证阶段均须读取 [页面与子视图实际视觉验收](references/acceptance.md#页面与子视图实际视觉验收)；有原型或截图时同时读取 [原型偏离关口](references/feature-design.md#原型偏离关口)，落实“实际查看参考 → 逐页实现并对照 → 逐页证据核对”。已有有效证据复用，不能用方案摘要或测试通过替代。

条件规则统一见 [按需加载与前置关口](references/coordination.md#按需加载与前置关口)，主控及单独调用的角色均适用。

## 默认流程

按 [阶段推进与确认后的动作](references/feature-design.md#阶段推进与确认后的动作) 维护唯一阶段及下一步。默认一次交付可实施方案，交付时说清确认后的动作；满足条件即推进，文档整理不重置阶段或已有授权，仅实质变化处理增量。

1. 核实目标及直接依赖，集中提出仍需用户回答的业务问题；不能把未核查事实写成已确认。
2. 先交付完整方案，再取得针对该版本的实施确认，最后开发。正式方案以 Markdown 为唯一维护源，生成同版本自包含 HTML，通过已启动且实际访问验证的本地 HTTP 地址交付 HTML，并保留 Markdown；按 [本地预览交付](references/plan-writing.md#本地预览地址与审阅交付) 保留审阅服务，预览未完成不能宣称完整交付；先列页面总览，按页面分章、页面内按功能展开“数据处理或操作逻辑 → 布局与组件 → 接口设计 → 实施验收”，复杂字段说明来源，接口区分新增、复用和修改已有；详见 [方案编写](references/plan-writing.md)。已有有效授权沿用。
3. 获批正式开发默认使用独立任务 worktree 和任务分支，例外按分支规则说明。依据逐页原型基线实现，主要视图可运行后及时对照，修正偏差后再推广相似页面，不新增逐页审批；按风险验证，复用有效证据，只补缺口。方案交付后选择数据库模式；实施已授权且未选择时等待 60 秒，采用预先授权的“沙盒自动执行”，已有明确选择沿用。自动模式不逐条确认范围内 SQL，手动模式由用户执行；规则见 [数据库环境](references/database.md#数据库环境)。真实联调数据经正常业务流程产生。
4. 工程条件满足后，同时交付功能入口和同版本代码验收材料，保留浏览器、服务、worktree 及数据。用户明确验收通过或明确免除后，才可合并或回写。
5. 按方案已授权的提交、合并、推送、远程核验和清理范围连续收尾；远程保全前不得清理，例外遵循收尾细则。归档前按 [数据库交付状态](references/database.md#归档时的数据库交付状态) 核对并保全 SQL，归档回复主动说明目标环境是否仍有 SQL 待执行；无变更也给出依据，未核实不得写成无需执行。阶段切换不新增审批。

## 按需使用角色

| 职责 | Skill |
| --- | --- |
| 需求与设计 | [需求与架构设计](../requirements-architecture/SKILL.md) |
| 实现与修复 | [开发实现](../project-implementation/SKILL.md) |
| 代码与规范审核 | [代码审核](../project-code-review/SKILL.md) |
| 行为与视觉验证 | [测试与验证](../project-test-validation/SKILL.md) |

默认主控承担所需职责，有独立工作块或审核需要时才分派；复杂重要改动在条件允许时独立审核，不把自查称作独立审核。每个执行者只加载自己的角色及所需规则，不递归组织工作流。主控维护 [同一当前记录](references/feature-design.md#精简记录与反馈)，核对角色证据而不重做其工作。

按需使用可用 Superpowers，不默认 TDD、不加载 controlled-development，不因技能调用扩大检查或增加审批。缺工具时说明实际限制并继续独立已授权工作。当前交付与原需求验收修复留在当前会话；独立新目标可建议另开，不自动创建或通知会话，不承诺结束后后台推进。
