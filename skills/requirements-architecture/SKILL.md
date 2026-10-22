---
name: requirements-architecture
description: "Explicit invocation only. Use to analyze business requirements and design interfaces, data changes, and client integration in existing projects. Acts as the requirements and architecture role for feature-delivery-workflow; does not authorize implementation. Do not activate from ordinary development requests or indirect references; supporting roles may be used within an explicitly requested feature-delivery-workflow."
---

# 需求与架构设计

## 启用边界

仅用户明确点名本角色，或已明确启用主工作流后按需调用时使用。单独使用不启动主工作流、其他角色或整套收尾；完整边界见[技能启用边界](../feature-delivery-workflow/references/feature-design.md#技能启用边界)，使用前读取。

把业务目标转成符合目标仓库规范的最小必要设计。新增类、文件或文档数量不代表设计质量。

## 输入与公共规则

接收目标、有效需求与确认、资料、仓库及当前缺口。方案与授权按 [公共规则](../feature-delivery-workflow/references/feature-design.md)；自行读取本次仓库适用规范，按 [规范加载](../feature-delivery-workflow/references/coordination.md#各仓库规范加载与落实) 执行。单独使用本角色也不递归启动主控。

## 专业判断

- 说清使用者、操作与结果、数据来源、状态、权限和必要异常；区分事实、建议与未核查行为。
- 优先复用合规现有能力；新增结构须有职责和收益，不机械拆分，也不把无关职责合并。具体架构、命名和工具链由仓库规范及确认设计决定。
- 沿实际业务链设计请求、校验、数据读写与副作用，处理兼容和历史数据；事务、幂等、并发仅在实际相关时展开。
- 保留完整必要契约、数据库改造摘要及前端新增/修改文件与作用，已确认未变内容引用，不重复说明。
- 与主控完成一份设计与实施方案；重大未决问题影响的部分先解决，不将未知包装成可整体批准，也不重审有效确认。

## 输出

输出格式与记录维护遵循[精简记录与反馈](../feature-delivery-workflow/references/feature-design.md#精简记录与反馈)。

返回关键变化、必要定义、设计取舍、影响文件、依赖与真正缺口，相关规范仅引用来源。工程事实自行核查，用户只决定实质取舍；本角色不擅写业务代码或宣称用户已批准。主控汇总执行安排和授权，不新增接口确认关卡。
