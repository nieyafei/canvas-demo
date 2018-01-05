/**
 * 
 * 时钟
 * @param {String} dom id/class
 * @param {Object} obj 对象参数
 */
var ClockTimer = function (dom, obj) {
    function CanvasIndex(Dom, options) {
        this.Element = Dom;
        this.ctx = Dom.getContext('2d');
        this._width = options.width || 300;
        this._height = options.height || 300;
        this._x = this._width / 2; // 中心点x坐标
        this._y = this._height / 2; // 中心的y坐标
        this._r = this._width / 2 - 10;
        this.color = options.color || "#98B7CB";
        this.bgColor = options.bgColor || "#fff";
        this.pColor = options.pColor || this.bgColor;// 内部圆
        this.pointerColor = options.pointerColor || "#ccc";
        this.hColor = options.hColor || "#333";
        this.mColor = options.mColor || "#333";
        this.sColor = options.sColor || "red";
        this.textColor = options.textColor || "#333";
        this.borderWidth = options.borderWidth || 10;
        this.hour = 2;
        this.minutes = 15;
        this.seconeds = 40;
    }

    // 启动游戏
    CanvasIndex.prototype.run = function () {
        this.Element.width = this._width;
        this.Element.height = this._height;
        this.start();
        var timer;
        window.clearInterval(timer);
        timer = setInterval(()=>{
            this.start();
        },50)
    }
    CanvasIndex.prototype.start = function(){
        this.ctx.clearRect(0,0,this._width,this._height);
        this.draw();
        this.ctx.restore();
    }
    // 开始画钟表
    CanvasIndex.prototype.draw = function () {
        this.ctx.save();
        // 画表盘
        this.ctx.translate(this._x,this._y);

        this.ctx.beginPath();
        this.ctx.arc(0, 0, this._r-this.borderWidth, 0, Math.PI * 2, false);
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = this.borderWidth;
        this.ctx.stroke();
        this.ctx.fillStyle = this.bgColor;
        this.ctx.fill();

        this.ctx.beginPath();
        this.ctx.arc(0, 0, this._r-this.borderWidth - 50, 0, Math.PI * 2, false);
        this.ctx.fillStyle = this.pColor;
        this.ctx.fill();
        // 每一个小时的角度
        var ran = Math.PI / 6;
        // 画数字
        var hourArr = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2];
        this.ctx.font = '16px sans-serif';
        this.ctx.textAlign = 'center';
        this.ctx.textBaseline = 'middle';
        this.ctx.fillStyle = this.textColor;
        for (var i = 0; i < hourArr.length; i++) {
            var x = Math.cos(ran * i) * (this._r - this.borderWidth -30);
            var y = Math.sin(ran * i) * (this._r - this.borderWidth - 30);
            this.ctx.fillText(hourArr[i], x, y);
        }

        // 画点
        var mran = Math.PI / 30;
        for (var j = 0; j < 60; j++) {
            var mx = Math.cos(mran * j) * (this._r - this.borderWidth - 15);
            var my = Math.sin(mran * j) * (this._r - this.borderWidth - 15);
            this.ctx.beginPath();
            this.ctx.arc( mx, my, j%5 === 0?4:3, 0, Math.PI * 2, false);
            this.ctx.fillStyle = j%5 === 0?this.color:this.pointerColor;
            this.ctx.fill();
        }

        // 中心点
        this.ctx.beginPath();
        this.ctx.arc(0,0,8,0,Math.PI*2,false);
        this.ctx.fillStyle = "#333";
        this.ctx.fill();

        // 画指针和分针
        
        var nowTime = this.getTimesObj();
        this.hour = nowTime.h;
        this.minutes = nowTime.m;
        this.seconeds = nowTime.s;
        this.drawTimerPointer();
    }
    CanvasIndex.prototype.drawTimerPointer = function(){
        // 画时针
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.rotate(this.hour*30*Math.PI/180 - Math.PI/2);
        this.ctx.lineWidth=6;
        this.ctx.lineCap = "round";
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(-15,0);
        this.ctx.lineTo((this._r-this.borderWidth-80),0);
        this.ctx.strokeStyle = this.hColor;
        this.ctx.stroke();
        this.ctx.restore();

        // 画分针
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.rotate(this.minutes*6*Math.PI/180 - Math.PI/2);
        this.ctx.lineWidth=4;
        this.ctx.lineCap = "round";
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(-18,0);
        this.ctx.lineTo((this._r-this.borderWidth-60),0);
        this.ctx.strokeStyle = this.mColor;
        this.ctx.stroke();
        this.ctx.restore();

        // 画秒针
        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.rotate(this.seconeds*6*Math.PI/180 - Math.PI/2);
        this.ctx.lineWidth=2;
        this.ctx.lineCap = "round";
        this.ctx.moveTo(0, 0);
        this.ctx.lineTo(-25,0);
        this.ctx.lineTo((this._r-this.borderWidth-45),0);
        this.ctx.strokeStyle = this.sColor;
        this.ctx.stroke();
        this.ctx.restore();

        // 中心点
        this.ctx.beginPath();
        this.ctx.arc(0,0,5,0,Math.PI*2,false);
        this.ctx.fillStyle = this.sColor;
        this.ctx.fill();
    }

    // 获取当前时间
  CanvasIndex.prototype.getTimesObj = function() {
    var time = new Date();
    return {
      year: time.getFullYear(),
      month: (time.getMonth() + 1 <= 9 ? "0" : "") + (time.getMonth() + 1),
      day: (time.getDate() <= 9 ? "0" : "") + time.getDate(),
      h: (time.getHours() <= 9 ? "0" : "") + time.getHours(),
      m: (time.getMinutes() <= 9 ? "0" : "") + time.getMinutes(),
      s: (time.getSeconds() <= 9 ? "0" : "") + time.getSeconds()
    }
  }
    var initCanvas = new CanvasIndex(StaticUtil.getDom(dom), obj);

    function init() {
        initCanvas.run();
    }
    init();
}