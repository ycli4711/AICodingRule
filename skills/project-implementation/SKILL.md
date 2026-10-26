---
name: project-implementation
description: "Explicit invocation only. Use to implement an authorized feature or fix in an existing repository, following its own language and engineering rules. Acts as the implementation role for feature-delivery-workflow, including frontend or backend tasks. Do not activate from ordinary development requests or indirect references; supporting roles may be used within an explicitly requested feature-delivery-workflow."
---

# 开发实现

## 启用边界

仅用户明确点名本角色，或已明确启用主工作流后按需调用时使用。单独使用不启动主工作流、其他角色或整套收尾；完整边界见[技能启用边界](../feature-delivery-workflow/references/feature-design.md#技能启用边界)，使用前读取。

在有效授权内实现清楚、合规、可验证的代码，不机械翻译设计或以编译成功代替完成。

## 输入与公共规则

接收有效方案、目录、修改边界、已有改动及依赖。授权沿用 [统一规则](../feature-delivery-workflow/references/feature-design.md#唯一授权规则)，仓库规范、worktree、协作和阻塞按 [执行协作](../feature-delivery-workflow/references/coordination.md)，验证按 [验证与收尾](../feature-delivery-workflow/references/acceptance.md)。只读当前需要部分，不重开工作流。

在主工作流内承担实现时，启动前必须核对 [方案文档交付与实施关口](../feature-delivery-workflow/references/feature-design.md#方案文档交付与实施关口) 的文档、版本、交付及确认依据。业务口径或开发范围选择、主控单句“已授权”不能替代这些证据；缺失时先向主控核实，仅继续只读核查，不写业务代码或先开发再补文档。单独使用本角色不因此启动整套工作流。

## 实现重点

- 先对照仓库规范和现有调用链；设计与实际规则冲突时说明具体影响和最小调整，不擅自改变业务口径。
- 依据原型实施时，按 [原型偏离关口](../feature-delivery-workflow/references/feature-design.md#原型偏离关口) 对照参考及已批准差异；整体实施授权和后台缺字段不授权自行删改列、替换语义或重排关键交互。新增偏离先交主控明确确认，已写入偏离如实报告，不先做后补或擅自回滚。
- 优先复用合规能力，新增模块或抽象须有明确职责与收益。结构调整解决实际职责和数据流问题，不只是搬代码，不预设技术层名称。
- 使用清晰领域命名和项目类型约定，避免含糊短名、无依据常量、重复规则及不必要框架。注释解释意图与约束，不复述代码。
- 沿输入、处理、输出和副作用检查契约一致性；查询按实际访问模式选择方式，不无依据重复访问或全量加载，性能结论须有证据。
- 涉及展示数据时按 [展示数据核对](../feature-delivery-workflow/references/acceptance.md#展示数据核对) 自测来源、接口与页面，查清异常空值和错值，不以页面能打开代替数据正确。
- 保护分配边界和已有改动；依赖未就绪时做独立部分，不用测试替身绕过项目要求的接入前提。

## 交接

输出格式与记录维护遵循[精简记录与反馈](../feature-delivery-workflow/references/feature-design.md#精简记录与反馈)。

提交审核前自查实际差异（含新增文件）、项目规范和受影响行为，完成最小充分自测。返回变化、版本、验证证据、已知缺陷及联调条件，不另写重复报告。按证据修复问题并只复验相关影响；不以删除检查或放宽断言消除问题。主控负责跨端整合及最终交付。
