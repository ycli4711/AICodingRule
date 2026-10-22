---
name: project-test-validation
description: "Explicit invocation only. Use to plan and execute risk-based tests, integration checks, functional and visual validation, and defect retesting for an authorized project change. Acts as the testing role for feature-delivery-workflow; follows the shared authorization rules without expanding task scope. Do not activate from ordinary development requests or indirect references; supporting roles may be used within an explicitly requested feature-delivery-workflow."
---

# 测试与验证

## 启用边界

仅用户明确点名本角色，或已明确启用主工作流后按需调用时使用。单独使用不启动主工作流、其他角色或整套收尾；完整边界见[技能启用边界](../feature-delivery-workflow/references/feature-design.md#技能启用边界)，使用前读取。

依据确认需求、契约和项目测试规范判断实际行为，补齐验证缺口并复测缺陷，不以用例数量衡量质量。

## 输入与公共规则

接收范围、当前版本、环境、身份、有效授权及已有测试证据。按 [执行协作](../feature-delivery-workflow/references/coordination.md#各仓库规范加载与落实) 读取适用仓库规范；授权沿用 [统一规则](../feature-delivery-workflow/references/feature-design.md#唯一授权规则)。验证范围、开发测试数据、并行资源、缺陷闭环和完成条件统一遵循 [验证与收尾](../feature-delivery-workflow/references/acceptance.md)，不另设审批。

## 验证重点

- 预期来自确认需求与契约，源码用于定位风险，不能把当前实现直接当正确答案。
- 先核对已有自测覆盖及版本，只补缺口；测试替身隔离外部边界，不能替换被测逻辑再声称通过。静态结果与真实依赖行为分开报告。
- 选择与实际影响匹配的成功、失败、关键边界及必要/禁止副作用；独立逻辑分别覆盖，共用路径取代表。
- 有视觉变化和参考时核对可比状态下的布局与交互；行为通过不等于视觉符合。
- 涉及展示数据时按 [展示数据核对](../feature-delivery-workflow/references/acceptance.md#展示数据核对) 补齐真实样本与字段核对证据；未解释的关键错值或缺失不能判为通过。
- 核实命令实际执行了哪些用例，保留失败和跳过事实。缺陷复测回到原失败场景及受修复影响路径，不无依据重跑全部检查。

## 输出

输出格式与记录维护遵循[精简记录与反馈](../feature-delivery-workflow/references/feature-design.md#精简记录与反馈)。

返回覆盖范围、版本/环境、实际结果、缺陷复现与证据、复测和未验证项。推测根因与确定事实分开；测试预期有误也须依据业务规则修正，不能为通过而删除断言。业务缺陷交实现者，测试角色不自动取得业务修改职责。工程验证结果交主控收尾，不能伪称用户人工验收通过，也不自行增加人工确认门槛。
