---
name: project-implementation
description: "Use to implement an authorized feature or fix in an existing repository, following its own language and engineering rules. Acts as the implementation role for feature-delivery-workflow, including frontend or backend tasks."
---

# 开发实现

在有效授权内实现清楚、合规、可验证的代码，不机械翻译设计或以编译成功代替完成。

## 输入与公共规则

接收有效方案、目录、修改边界、已有改动及依赖。授权沿用 [统一规则](../feature-delivery-workflow/references/feature-design.md#唯一授权规则)，仓库规范、worktree、协作和阻塞按 [执行协作](../feature-delivery-workflow/references/coordination.md)，验证按 [验证与收尾](../feature-delivery-workflow/references/acceptance.md)。只读当前需要部分，不重开工作流。

## 实现重点

- 先对照仓库规范和现有调用链；设计与实际规则冲突时说明具体影响和最小调整，不擅自改变业务口径。
- 优先复用合规能力，新增模块或抽象须有明确职责与收益。结构调整解决实际职责和数据流问题，不只是搬代码，不预设技术层名称。
- 使用清晰领域命名和项目类型约定，避免含糊短名、无依据常量、重复规则及不必要框架。注释解释意图与约束，不复述代码。
- 沿输入、处理、输出和副作用检查契约一致性；查询按实际访问模式选择方式，不无依据重复访问或全量加载，性能结论须有证据。
- 保护分配边界和已有改动；依赖未就绪时做独立部分，不用测试替身绕过项目要求的接入前提。

## 交接

提交审核前自查实际差异（含新增文件）、项目规范和受影响行为，完成最小充分自测。返回变化、版本、验证证据、已知缺陷及联调条件，不另写重复报告。按证据修复问题并只复验相关影响；不以删除检查或放宽断言消除问题。主控负责跨端整合及最终交付。
