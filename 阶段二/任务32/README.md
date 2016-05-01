### 任务目的

- 加强对JavaScript的掌握
- 熟悉常用表单处理逻辑
- 学习如何模块如何设计，不同模块间如何尽量解耦

### 任务描述

- 实现以JavaScript对象的方式定义表单及验证规则
- 表单配置参考示例如下：（不需要一致，仅为参考）
```
    {
        label: '名称',                    // 表单标签
        type: 'input',                   // 表单类型
        validator: function () {...},    // 表单验证规
        rules: '必填，长度为4-16个字符',    // 填写规则提示
        success: '格式正确',              // 验证通过提示
        fail: '名称不能为空'               // 验证失败提示
    }
 ```   
- 基于该配置项，实现一套逻辑，可以自动生成表单的展现、交互、验证
- 使用你制作的表单工厂，在一个页面上创建两套样式不同的表单

### 任务注意事项

- 实现中，尽可能考虑代码的可读性和可复用性
- 尽量时表单配置、生成、样式、验证几个逻辑之间的耦合度足够低
- 请注意代码风格的整齐、优雅
- 代码中含有必要的注释
- 不允许借助任何第三方组件库实现

### 任务协作建议

- 团队集中讨论，明确题目要求，保证队伍各自对题目要求认知一致
- 各自完成任务实践
- 交叉互相Review其他人的代码，建议每个人至少看一个同组队友的代码
- 相互讨论，最后合成一份组内最佳代码进行提交

### 在线学习参考资料

[Web相关名词通俗解释](https://www.zhihu.com/question/22689579)
[MDN HTML入门](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Introduction)
[慕课HTML+CSS基础教程视频](http://www.imooc.com/learn/9)
[JavaScript 表单验证](http://www.w3school.com.cn/js/js_form_validation.asp)
[HTML表单指南](https://developer.mozilla.org/zh-CN/docs/Web/Guide/HTML/Forms)

### 排名
- [one](https://github.com/muyewhatever/task_32/tree/master)
- [演示地址](https://muyewhatever.github.io/task_32/)
- [two](https://github.com/YuyangGong/IFE-2016-Spring/blob/master/second/js/task32.js)
- [演示地址](http://yuyang.date/second/html/task32.html)
- [three](https://github.com/xiaoqqchen/xiaoqqchen.github.io/tree/master/BaiduTask2_32)
- [演示地址](http://xiaoqqchen.github.io/BaiduTask2_32/)