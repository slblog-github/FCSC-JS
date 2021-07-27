# FCSC JS介绍
FCSCS全称`Fuck Copy Source Code JavaScript`
顾名思义，防止他人将网站源码获取、修改网站内容装x,
本人也被这种人搞过N次，一气之下写了这一套js。
想到这种事就烦。。。。。如果你也一样，那么继续看下去吧

# 引用
需要使用两个Js，一个初始化一个本体。
他们两个引用中间填写设置
这是模板:
```html
<script src="https://cdn.jsdelivr.net/gh/yellowface233/FCSC-JS/v1.0/load.js"></script>
<script>
    start="true";
    right="true";
    devtool="true";
    iframe="true";
</script>
<script src="https://cdn.jsdelivr.net/gh/yellowface233/FCSC-JS/v1.0/main.js"></script>
```
👆这是一个火力全开的示例
true代表开 false代表关！！
你可以自行调整力度~
设置详细：
```plaintext
start：整体开关（关闭的话建议下面三个都得关，否则关不干净）
right：右键开关
devtool：F12/检查元素/开发者工具
iframe：自动跳出iframe框架
```

# 结语
配置错会增加网站warning error，会弹窗警告！
欢迎尝试~
