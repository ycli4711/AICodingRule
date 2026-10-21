---
name: project-implementation
description: "Explicit invocation only. Use to implement an authorized feature or fix in an existing repository, following its own language and engineering rules. Acts as the implementation role for feature-delivery-workflow, including frontend or backend tasks. Do not activate from ordinary development requests or indirect references; supporting roles may be used within an explicitly requested feature-delivery-workflow."
---

# 开发实现

## 启用边界

- 仅在用户明确要求使用本技能时启用（`$技能名` 或明确点名要求使用均可）。普通的开发、修复、审核、测试请求，以及“可以，按方案实施”等实施确认，不构成技能启用指令；仅讨论或检查技能也不构成启用。
- 用户明确启用 `feature-delivery-workflow` 后，可在该任务范围按需使用其四个配套角色，无需逐个再次点名。单独点名某个角色只启用该角色及其必要参考，不自动启动整套工作流或其他角色。
- 未明确启用时，不通过其他技能、参考链接或历史调用间接套用本套规则。继续遵循用户指令与项目规范；不能仅依据本套规则创建或切换分支、创建 worktree、分派代理或安排提交合并。
- 整套工作流的任务分支/worktree 及协调安排仅在用户明确启用 `feature-delivery-workflow` 时适用；单独启用角色不自动引入这些安排。技能启用不替代实施、提交、推送等操作所需的已有授权。


在有效授权内实现清楚、合规、可验证的代码，不机械翻译设计或以编译成功代替完成。

## 输入与公共规则

接收有效方案、目录、修改边界、已有改动及依赖。授权沿用 [统一规则](../feature-delivery-workflow/references/feature-design.md#唯一授权规则)，仓库规范、worktree、协作和阻塞按 [执行协作](../feature-delivery-workflow/references/coordination.md)，验证按 [验证与收尾](../feature-delivery-workflow/references/acceptance.md)。只读当前需要部分，不重开工作流。

## 实现重点

- 先对照仓库规范和现有调用链；设计与实际规则冲突时说明具体影响和最小调整，不擅自改变业务口径。
- 优先复用合规能力，新增模块或抽象须有明确职责与收益。结构调整解决实际职责和数据流问题，不只是搬代码，不预设技术层名称。
- 使用清晰领域命名和项目类型约定，避免含糊短名、无依据常量、重复规则及不必要框架。注释解释意图与约束，不复述代码。
- 沿输入、处理、输出和副作用检查契约一致性；查询按实际访问模式选择方式，不无依据重复访问或全量加载，性能结论须有证据。
- 涉及展示数据时按 [展示数据核对](../feature-delivery-workflow/references/acceptance.md#展示数据核对) 自测来源、接口与页面，查清异常空值和错值，不以页面能打开代替数据正确。
- 保护分配边界和已有改动；依赖未就绪时做独立部分，不用测试替身绕过项目要求的接入前提。

## 交接

遵循 [精简记录与反馈](../feature-delivery-workflow/references/feature-design.md#精简记录与反馈)：只突出实际增量、问题和验证结论；文件用途及执行细节在必要位置维护一次，不复述方案或逐条记录命令过程。

提交审核前自查实际差异（含新增文件）、项目规范和受影响行为，完成最小充分自测。返回变化、版本、验证证据、已知缺陷及联调条件，不另写重复报告。按证据修复问题并只复验相关影响；不以删除检查或放宽断言消除问题。主控负责跨端整合及最终交付。
