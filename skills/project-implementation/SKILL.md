---
name: project-implementation
description: "Explicit invocation only. Use to implement an authorized feature or fix in an existing repository, following its own language and engineering rules. Acts as the implementation role for feature-delivery-workflow, including frontend or backend tasks. Do not activate from ordinary development requests or indirect references; supporting roles may be used within an explicitly requested feature-delivery-workflow."
---

# 开发实现

## 启用边界

仅用户明确点名本角色，或已明确启用主工作流后按需调用时使用。单独使用不启动主工作流、其他角色或整套收尾；完整边界见[技能启用边界](../feature-delivery-workflow/references/feature-design.md#技能启用边界)，使用前读取。

在有效授权内实现清楚、合规、可验证的代码，不机械翻译设计或以编译成功代替完成。

## 输入与公共规则

接收有效方案、目录、修改边界、已有改动及依赖。读取 [授权范围](../feature-delivery-workflow/references/feature-design.md#授权范围与延续)、[仓库规范](../feature-delivery-workflow/references/coordination.md#各仓库规范加载与落实)、[验证安排](../feature-delivery-workflow/references/acceptance.md#一份验证安排) 和 [证据有效性](../feature-delivery-workflow/references/acceptance.md#证据有效性与增量检查)。主工作流内建立环境时读 [分支规则](../feature-delivery-workflow/references/coordination.md#分支与运行环境)；涉及数据库或数据准备读 [数据库规则](../feature-delivery-workflow/references/database.md) 的对应节；启动服务前读 [服务细则](../feature-delivery-workflow/references/service-recovery.md)。

首次使用须读取 [按需加载与前置关口](../feature-delivery-workflow/references/coordination.md#按需加载与前置关口)，按实际动作补齐条件规则；单独调用也适用。已读有效内容复用。

主工作流内实施前核对 [方案文档交付与实施关口](../feature-delivery-workflow/references/feature-design.md#方案文档交付与实施关口) 的原始交付及确认依据；缺失先向主控核实，只继续只读工作。单独使用本角色不启动整套流程。

## 实现重点

- 先对照仓库规范和现有调用链；设计与实际规则冲突时说明具体影响和最小调整，不擅自改变业务口径。
- 涉及页面展示或交互时，实施前读取并执行 [页面与子视图实际视觉验收](../feature-delivery-workflow/references/acceptance.md#页面与子视图实际视觉验收)：实际查看当前页原型，主要视图可运行即逐页对照，修正偏差后再推广相似页面；交接保留逐页参考、实现截图、差异与结论，不等全部页面完成才检查，不新增逐页审批。无原型时使用已确认设计依据，缺参考按下述关口处理。
- 依据原型实施时，按 [原型偏离关口](../feature-delivery-workflow/references/feature-design.md#原型偏离关口) 对照参考及已批准差异；整体实施授权和后台缺字段不授权自行删改列、替换语义或重排关键交互。新增偏离先交主控明确确认，已写入偏离如实报告，不先做后补或擅自回滚。
- 优先复用合规能力，新增模块或抽象须有明确职责与收益。结构调整解决实际职责和数据流问题，不只是搬代码，不预设技术层名称。
- 使用清晰领域命名和项目类型约定，避免含糊短名、无依据常量、重复规则及不必要框架。注释解释意图与约束，不复述代码。
- 沿输入、处理、输出和副作用检查契约一致性；查询按实际访问模式选择方式，不无依据重复访问或全量加载，性能结论须有证据。
- 涉及展示数据时按 [展示数据核对](../feature-delivery-workflow/references/acceptance.md#展示数据核对) 自测来源、接口与页面。关键字段出现“未提供”、空白或异常默认值时，追查同一记录的来源／快照、接口及页面映射，查明缺失环节、原因与操作影响；范围内实现缺陷直接修复复测，证据不足标为未验证，交接保留异常及依据，不以占位文案正常显示判为通过，不新增逐字段审批。
- 保护分配边界和已有改动；依赖未就绪时做独立部分，不用测试替身绕过项目要求的接入前提。

## 交接

输出格式与记录维护遵循[精简记录与反馈](../feature-delivery-workflow/references/feature-design.md#精简记录与反馈)。

提交审核前自查实际差异（含新增文件）、项目规范和受影响行为，完成最小充分自测。返回变化、版本、验证证据、已知缺陷及联调条件，不另写重复报告。按证据修复问题并只复验相关影响；不以删除检查或放宽断言消除问题。主控负责跨端整合及最终交付。
