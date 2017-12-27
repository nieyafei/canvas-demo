/**
 * 统一js utils
 */
var StaticUtil = {
  isCanvas:function(ctx){
    // 判断是否支持canvas
    if(ctx.getContext){
      return true;
    }else{
      console.log('此浏览器不支持canvas，请更换浏览器再试一下');
      return false;
    }
  },
  getWindowWiHe:function(){
    var clientWidth=0,clientHeight=0;
    // 获取浏览器的宽度和高度
    if (window.innerWidth) {
      clientWidth = window.innerWidth;
    } else if (document.body && document.body.clientWidth) {
      clientWidth = document.body.clientWidth;
    }
    if (window.innerHeight) {
      clientHeight = window.innerHeight;
    } else if (document.body && document.body.clientHeight) {
      clientHeight = document.body.clientHeight;
    }

    if (document.documentElement && document.documentElement.clientWidth && document.documentElement.clientHeight) {
      clientWidth = document.documentElement.clientWidth;
      clientHeight = document.documentElement.clientHeight;
    }
    return {width:clientWidth,height:clientHeight}
  },
  getDom:function(domClass){
    if (domClass.startsWith(".")) {
      return document.getElementsByClassName(domClass.slice(1))[0]
    }
    return document.getElementById(domClass.slice(1));
  }
}
