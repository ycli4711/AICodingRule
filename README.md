# 个人开发规范与 skill

`AGENTS.md` 保存 Codex 用户级通用规则；`CLAUDE.md` 保存 Claude Code 用户级通用规则。各目标项目仍以自身适用的规范约束设计、实现和审核。

## 功能交付与角色 Skill

| Skill | 职责 |
| --- | --- |
| [feature-delivery-workflow](skills/feature-delivery-workflow/SKILL.md) | 主控：范围、阶段确认、授权、依赖、并行与最终交付 |
| [requirements-architecture](skills/requirements-architecture/SKILL.md) | 需求与架构：业务规则、最小必要结构、接口、数据及页面接入设计 |
| [project-implementation](skills/project-implementation/SKILL.md) | 开发：遵守目标仓库规范，实现授权范围并验证实际行为 |
| [project-code-review](skills/project-code-review/SKILL.md) | 审核：只读检查实际差异、业务正确性、规范、可维护性与验证质量 |
| [project-test-validation](skills/project-test-validation/SKILL.md) | 测试：按需求与项目规范验证实际行为、真实联调和视觉，记录缺陷及复测证据 |

用 `$feature-delivery-workflow` 发起功能交付，主控按阶段读取对应角色 Skill。也可单独使用角色；角色引用主控目录中的公共规范、文档及验收规则，因此主控和四个角色目录应保持同级并一起同步到技能目录。角色分工不要求每次为各角色启动代理，简单任务可由主控执行对应角色规则。开发自测后，代码审核与测试验证具备独立条件时可以并行，缺陷修复后分别复核和复测，由主控核对最终交付。

`skills/controlled-development/` 作为历史流程保留，仅在用户明确要求时使用，不作为新角色的依赖。

Git 仓库用于保存版本和共享修改。拉取只更新仓库文件，不代表本机其他位置的 skill 副本或运行中的会话自动更新。当前先试用流程，不配置自动安装或实时同步。

## 验证与迭代

结构校验和链接检查不代表真实开发行为已经验收。用实际任务核查：各角色是否读取目标仓库规范，新增结构是否有必要，开发是否保留已有改动，审核是否检查实际代码及有效测试。根据真实结果调整，不将某个项目的语言或框架规则写死到通用角色中。
