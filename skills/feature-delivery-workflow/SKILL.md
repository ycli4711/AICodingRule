---
name: feature-delivery-workflow
description: "Explicit invocation only. Use when a user requests coordinated delivery of business features in existing projects, especially multiple features or service, Web, App and other clients across repositories, with interaction and API review, integration, acceptance or interrupted-work recovery. Supports sentence, document, screenshot and prototype inputs. Do not activate from ordinary development requests or indirect references; supporting roles may be used within an explicitly requested feature-delivery-workflow."
---

# 通用功能交付

## 启用边界

仅用户明确点名时启用；普通任务、实施确认及技能维护不触发工作流。启用不等于实施授权，完整边界见[技能启用边界](references/feature-design.md#技能启用边界)，使用前读取。

主控负责把当前业务目标推进到可验证交付：范围、授权、依赖、角色分工与完成判断。具体架构和写法遵循各仓库规范。简单问答、文案或明确低风险小修复采用普通处理，不套完整流程。

## 公共规则入口

只读取当前需要的部分；公共规则以以下三份文件为唯一维护位置，角色不另设审批或重复检查：

| 当前工作 | 规则 |
| --- | --- |
| 需求、统一方案、授权与交接、记录 | [方案与授权](references/feature-design.md) |
| 仓库规范、worktree、运行环境、并行、阻塞 | [执行协作](references/coordination.md) |
| 自测、审核、验收、证据复用、提交合并及清理 | [验证与收尾](references/acceptance.md) |

## 默认流程

1. 核实项目、当前状态与已有确认。工程事实先完成必要只读核查；需要用户回答的业务疑问在聊天中集中单列，不只留在文档里。发现事项先判断与目标行为的关联，已确认内容直接沿用；按 [方案与授权](references/feature-design.md#疑问单独交给用户工程事实先自行核实) 执行。依据原型、截图或设计稿开发时，执行 [原型偏离关口](references/feature-design.md#原型偏离关口)：未明确批准的字段、操作、语义及关键布局变化不得自行实施，后台缺能力不构成删改原型的授权。
2. 需求确认后，将接口设计与实施安排写成一份完整方案文档，复读后在聊天中交付可点击链接及范围摘要，再明确申请对该文档的确认及实施授权。必须先交付文档、后取得确认、再开始开发；业务口径和开发范围的选择不构成方案授权，禁止先开发再补文档。执行 [方案文档交付与实施关口](references/feature-design.md#方案文档交付与实施关口)。重大未决问题、需先验证可行性或用户只要求设计时才拆开。
3. 本工作流已被明确启用且方案获实施授权后，正式开发默认创建或复用独立任务 worktree，并使用任务分支；不在主目录切分支代替隔离。仅分析或编写方案时不创建开发 worktree。主目录开发仅作为有明确理由的例外，按 [执行协作](references/coordination.md#分支与运行环境) 记录依据、风险与保护措施。安排可独立工作并行推进，分别判断开发依赖和真实联调依赖。
4. 实现、自测、代码审核和实际行为验证按风险选择，共享当前版本的有效证据；只补缺口，不因角色切换重跑。缺数据先查业务生产链，真实联调与验收数据必须通过正常业务流程产生，不能为走通测试补造业务事实，执行 [缺数据先查业务链路](references/acceptance.md#缺数据先查业务链路)。数据库验证默认复用现有开发库，不自行另建隔离库；合规数据库变更 SQL 交用户手动执行，并弹框确认执行完成后再继续依赖步骤，具体按 [数据库环境](references/coordination.md#数据库环境) 执行，不能用该手动关口为补造数据取得授权。
5. 正式业务开发达到约定工程条件后，默认进入待人工验收，**同时交付功能验收入口和同版本的代码验收材料**，便于用户检查实际差异与代码质量，具体见 [同步交付代码验收](references/acceptance.md#同步交付代码验收)。按 [人工验收规则](references/acceptance.md#工程完成与人工验收) 保留浏览器、服务、worktree 和验收数据。**用户明确验收通过后才能合并或回写；仅用户明确免除人工验收时可跳过。** 统一方案须包含提交、合并、远程推送及清理的完整收尾范围；方案获实施授权且满足该关口后，自动连续执行收尾，推送前不再单独询问，严格遵循[合并后先推送再清理](references/acceptance.md#合并后先推送再清理)，不重复申请已有授权。

阶段切换是进度说明，不是额外审批。既有授权持续有效，不能只列遗留项结束；有具体阻塞按公共规则处理。

过程文档及角色交接统一遵循[精简记录与反馈](references/feature-design.md#精简记录与反馈)；编写或修订方案时，执行该节的生成顺序与输出前检查。主控整合角色结果并维护同一记录，不拼接重复报告。

## 按需使用角色

| 职责 | Skill | 结果 |
| --- | --- | --- |
| 需求与设计 | [需求与架构设计](../requirements-architecture/SKILL.md) | 规则、契约、影响及设计取舍；主控补齐同份方案的执行安排 |
| 实现与修复 | [开发实现](../project-implementation/SKILL.md) | 代码增量、自查及必要自测证据 |
| 代码与规范审核 | [代码审核](../project-code-review/SKILL.md) | 有依据的缺陷、规范问题及复核结论 |
| 行为与视觉验证 | [测试与验证](../project-test-validation/SKILL.md) | 复用已有测试，补齐真实行为验证和缺陷复测 |

角色是职责，不要求四个代理或四份报告。简单任务可由主控承担，不能把自查称作独立审核；复杂重要改动在条件允许时使用独立审核。分派提供对应 Skill 路径与任务简报，不一次要求执行者加载全部角色。子任务不递归组织整套工作流，主控不重新执行已完成的角色工作。

按任务需要使用可用的 Superpowers 能力，不因技能调用新增确认、全量测试或代理；不默认 TDD，不加载 controlled-development。缺工具时说明实际限制，继续独立已授权工作，不虚构能力或承诺结束会话后自动后台推进。
