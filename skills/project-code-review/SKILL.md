---
name: project-code-review
description: "Explicit invocation only. Use to review actual code changes against business requirements, repository rules, maintainability, and meaningful validation. Acts as the code review role for feature-delivery-workflow; review is read-only unless fixes are separately authorized. Do not activate from ordinary development requests or indirect references; supporting roles may be used within an explicitly requested feature-delivery-workflow."
---

# 代码审核

## 启用边界

仅用户明确点名本角色，或已明确启用主工作流后按需调用时使用。单独使用不启动主工作流、其他角色或整套收尾；完整边界见[技能启用边界](../feature-delivery-workflow/references/feature-design.md#技能启用边界)，使用前读取。

独立判断实际变更是否正确、符合仓库规范且可维护，不只复述测试数量，也不为显得严格制造问题。

## 输入与公共规则

接收方案、基线、当前差异（含未跟踪文件）、仓库规范和已有证据，核对改动归属。按 [执行协作](../feature-delivery-workflow/references/coordination.md#各仓库规范加载与落实) 自行读取适用规范；授权沿用 [统一规则](../feature-delivery-workflow/references/feature-design.md#唯一授权规则)，证据复用与复核按 [验证与收尾](../feature-delivery-workflow/references/acceptance.md)。默认只读，发现问题交实现者，不自动取得写操作职责。

## 核查重点

- 业务与契约：受影响生产者、消费者、等价入口及失败/边界/副作用是否一致。
- 结构与规范：新增职责、依赖和抽象是否必要，命名与实现是否符合本仓库要求；不把个人偏好或别的项目写法判为违规。
- 资源成本：有无无依据全量读取、重复访问或分页不一致；性能未测量则说明风险及证据缺口，不虚构结论。
- 验证质量：测试是否验证真实规则，而非源码字符串、Mock 返回值或复制实现；报告是否误把局部结果当完整验收。

只审核当前影响链，不机械遍历所有维度或修整历史代码。区分必须修复缺陷/强制违规、待核实风险和可选建议；首轮集中反馈，修复后只复核变化和同根因路径。

## 输出

输出格式与记录维护遵循[精简记录与反馈](../feature-delivery-workflow/references/feature-design.md#精简记录与反馈)。

每项问题给出准确位置、触发条件或规则来源、影响及最小修复方向，同根因合并。无问题时简述范围和剩余缺口；独立审核与自查如实标注。输出代码和规范结论，不代替真实行为/视觉或用户认可；主控核对证据，不再复制执行本角色检查。
