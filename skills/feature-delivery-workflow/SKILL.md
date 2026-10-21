---
name: feature-delivery-workflow
description: "Use when a user requests coordinated delivery of business features in existing projects, especially multiple features or service, Web, App and other clients across repositories, with interaction and API review, integration, acceptance or interrupted-work recovery. Supports sentence, document, screenshot and prototype inputs."
---

# 通用功能交付

主控负责把当前业务目标推进到可验证交付：范围、授权、依赖、角色分工与完成判断。具体架构和写法遵循各仓库规范。简单问答、文案或明确低风险小修复采用普通处理，不套完整流程。

## 公共规则入口

只读取当前需要的部分；公共规则以以下三份文件为唯一维护位置，角色不另设审批或重复检查：

| 当前工作 | 规则 |
| --- | --- |
| 需求、统一方案、授权与交接、记录 | [方案与授权](references/feature-design.md) |
| 仓库规范、worktree、运行环境、并行、阻塞 | [执行协作](references/coordination.md) |
| 自测、审核、验收、证据复用、提交合并及清理 | [验证与收尾](references/acceptance.md) |

## 默认流程

1. 核实项目、当前状态与已有确认。需求不明确时集中澄清；已确认内容直接沿用。
2. 需求确认后，将接口设计与实施安排写成一份方案，明确范围、操作边界和完成条件，一次申请确认及实施授权。重大未决问题、需先验证可行性或用户只要求设计时才拆开。
3. 授权后按隔离需要选择主目录或任务 worktree，不默认创建独立工作树；需要时按 [执行协作](references/coordination.md#分支与运行环境) 放入任务记录目录。安排可独立工作并行推进，分别判断开发依赖和真实联调依赖。
4. 实现、自测、代码审核和实际行为验证按风险选择，共享当前版本的有效证据；只补缺口，不因角色切换重跑。
5. 达到约定工程条件后，连续完成已授权提交、合回开发基线和安全清理，再交付。用户要求先人工验收时，按 [人工验收规则](references/acceptance.md#工程完成与人工验收) 保留浏览器、服务和验收数据，等待明确通过后再收尾；不另行增加未约定的人工确认。

阶段切换是进度说明，不是额外审批。既有授权持续有效，不能只列遗留项结束；有具体阻塞按公共规则处理。

所有过程文档及角色交接统一按 [精简记录与反馈](references/feature-design.md#精简记录与反馈) 输出：先呈现状态、变化、问题和待决策项，必要定义只维护一次。主控合并重复内容、更新失效状态，不把各角色报告拼接成流水账；简单任务不拆多份文档。

## 按需使用角色

| 职责 | Skill | 结果 |
| --- | --- | --- |
| 需求与设计 | [需求与架构设计](../requirements-architecture/SKILL.md) | 规则、契约、影响及设计取舍；主控补齐同份方案的执行安排 |
| 实现与修复 | [开发实现](../project-implementation/SKILL.md) | 代码增量、自查及必要自测证据 |
| 代码与规范审核 | [代码审核](../project-code-review/SKILL.md) | 有依据的缺陷、规范问题及复核结论 |
| 行为与视觉验证 | [测试与验证](../project-test-validation/SKILL.md) | 复用已有测试，补齐真实行为验证和缺陷复测 |

角色是职责，不要求四个代理或四份报告。简单任务可由主控承担，不能把自查称作独立审核；复杂重要改动在条件允许时使用独立审核。分派提供对应 Skill 路径与任务简报，不一次要求执行者加载全部角色。子任务不递归组织整套工作流，主控不重新执行已完成的角色工作。

按任务需要使用可用的 Superpowers 能力，不因技能调用新增确认、全量测试或代理；不默认 TDD，不加载 controlled-development。缺工具时说明实际限制，继续独立已授权工作，不虚构能力或承诺结束会话后自动后台推进。
