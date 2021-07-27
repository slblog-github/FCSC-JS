/*
 * FCSC JS
 * Fuck Copy Source Code JavaScript
 * Powered By YellowFace
*/
// main.JS 作用：获取所有设置并且添加相应功能 简称 控制器。
;
//输出控制台
console.log("FCSCJS \u52a0\u8f7d\u6210\u529f");
console.log("By YellowFace");
//是否使用
if(start == "false"){
    var nostart = 0;
}
else{
    if(start == "true"){
        var nostart = 1;
    }
    else{
        alert("\u0046\u0043\u0053\u0043\u004a\u0053\u8b66\u544a\u003a\u5f00\u5173\u65e0\u6cd5\u5224\u65ad\u65e0\u6cd5\u7ee7\u7eed");
        console.warn("\u0046\u0043\u0053\u0043\u004a\u0053\u8b66\u544a\u003a\u5f00\u5173\u65e0\u6cd5\u5224\u65ad\u65e0\u6cd5\u7ee7\u7eed");
    }
}
// 判断所有变量是否没有被设置，弹出错误提醒。
if(nostart == 1){
    if(start == "null"){
        alert("\u0046\u0043\u0053\u0043\u004a\u0053\u8fd0\u884c\u65f6\u51fa\u9519\u003a\u6709\u8bbe\u7f6e\u9879\u6ca1\u6709\u8bbe\u7f6e");
        //输出控制台
        console.error("\u0046\u0043\u0053\u0043\u004a\u0053\u003a\u6709\u8bbe\u7f6e\u9879\u6ca1\u6709\u8bbe\u7f6e");
    }
    if(start == "right"){
        alert("\u0046\u0043\u0053\u0043\u004a\u0053\u8fd0\u884c\u65f6\u51fa\u9519\u003a\u6709\u8bbe\u7f6e\u9879\u6ca1\u6709\u8bbe\u7f6e");
        //输出控制台
        console.error("\u0046\u0043\u0053\u0043\u004a\u0053\u003a\u6709\u8bbe\u7f6e\u9879\u6ca1\u6709\u8bbe\u7f6e");
    }
    if(start == "devtool"){
        alert("\u0046\u0043\u0053\u0043\u004a\u0053\u8fd0\u884c\u65f6\u51fa\u9519\u003a\u6709\u8bbe\u7f6e\u9879\u6ca1\u6709\u8bbe\u7f6e");
        //输出控制台
        console.error("\u0046\u0043\u0053\u0043\u004a\u0053\u003a\u6709\u8bbe\u7f6e\u9879\u6ca1\u6709\u8bbe\u7f6e");
    }
    if(start == "iframe"){
        alert("\u0046\u0043\u0053\u0043\u004a\u0053\u8fd0\u884c\u65f6\u51fa\u9519\u003a\u6709\u8bbe\u7f6e\u9879\u6ca1\u6709\u8bbe\u7f6e");
        //输出控制台
        console.error("\u0046\u0043\u0053\u0043\u004a\u0053\u003a\u6709\u8bbe\u7f6e\u9879\u6ca1\u6709\u8bbe\u7f6e");
    }
}
if(nostart == 0){
    //关闭FCSC
    console.log("FCSCJS:start=False");
}
//设置组件地址
var RSRC = "right.js";//right
var DSRC = "devtool.js";//devtool
var ISRC = "iframe.js";//iframe(i大写I)
//运行
if(right == "true"){
    //右键开启
    document.write("<script src=\'"+ RSRC +"\'></script>");
}else{
    //右键关闭，不做操作
}

if(devtool == "true"){
    //右键开启
    document.write("<script src=\'"+ DSRC +"\'></script>");
}else{
    //右键关闭，不做操作
}

if(iframe == "true"){
    //右键开启
    document.write("<script src=\'"+ ISRC +"\'></script>");
}else{
    //右键关闭，不做操作
}
//by yellowface 2017-2021