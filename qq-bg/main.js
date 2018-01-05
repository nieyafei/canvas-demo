/**
 * qq登录背景特效
 * 
 */

var qqBgCanvas = function(dom,obj){
    function CanvasIndex(Dom,options){
        this.Element = Dom;
        this.ctx = Dom.getContext('2d');
        this.color = options.color || "";
    }

    // 执行
    CanvasIndex.prototype.run = function(){

    }

    // 绘制
    CanvasIndex.prototype.draw = function(){

    }

    // 自适应操作
    CanvasIndex.prototype.resize = function(){

    }

    // 更新宽度和高度
    CanvasIndex.prototype.setWidthHeight = function(){

    }
    var canvasDom = new CanvasIndex(StaticUtil.getDom(dom),obj);
    function init(){
        canvasDom.run();
    }
    init();
    window.onresize = function(){
        canvasDom.resize();
    }
}
qqBgCanvas("#canvas",{});