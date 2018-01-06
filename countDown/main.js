/**
 * 动画倒计时
 * @param {String} dom
 * @param {Object} obj
 */
var CountDown = function(dom,obj){
    function CanvasObejct(Dom,options){
        options = options || {};
        this.Element = Dom;
        this.ctx = this.Element.getContext('2d');
        this._width = options.width || 400;
        this._height = options.height || 400;
        this.bgColor = options.bgColor || "#000";
        this.color = options.color || "#fff";
        this.bWidth = 4;// 边框宽度
        this._r = this._height/5;// 圆的半径
        this._time = 10;
        this._rorate = 0;
        this._move_r = 0;
        this.originArr = ["",0,-1,1,-1,1,1,-1,-1,-1,0];// 
        this.moveR = ["",0,0.6,1,1,0.35,0.35,0.4,1,0.5,1];// 移动位置
        this._number = 10;// 当前秒数
        this.aniTime = 20;
    }
    // 开始游戏
    CanvasObejct.prototype.run = function(){
        this.Element.width = this._width;
        this.Element.height = this._height;
        var timer;
        setInterval(()=>{
            this.ctx.clearRect(0, 0, this._width, this._height);
            this._rorate===360?(this._rorate = 0):(this._rorate++);
            if(Math.abs(this._move_r) <= this._r*this.moveR[this._number]){
                this._move_r = this._move_r + this.originArr[this._number]*1;
            }
            this.start();
        },this.aniTime);
        
        // 倒计时开始
        timer = setInterval(()=>{
            this._number > 1?(this._number--):(this._number = 0);
        },1000);

        // 开始执行
        this.start();
    }
    // 开始执行画图
    CanvasObejct.prototype.start = function(){
        
        this.draw();
    }
    // 画零
    CanvasObejct.prototype.draw = function(){
        // 填充背景色
        this.ctx.save();
        this.ctx.fillRect(0,0,this._width,this._height);
        this.fillStyle = this.bgColor;
        this.drawNumber(this._number);
        
    }
    // 绘制数字
    CanvasObejct.prototype.drawNumber = function(number){
        // 修改圆点的位置到最中间
        this.ctx.save();
        this.ctx.translate(this._width/2, (this._height/2) + this._move_r);// 上面的圆
        this.drawClock(0,0);
        this.ctx.restore();
        switch(this._number){
            case 10:
                this.drawLine({x:-(this._r+50),y:-this._r,x1:-(this._r+50),y1:this._r});
                break;
            case 9:
                this.drawLine({x:Math.cos(Math.PI / 6)*this._r,y:Math.sin(Math.PI / 6)*this._r,x1:0,y1:this._r*2});
                break;
            case 8:
                this.ctx.save();
                this.ctx.translate(this._width/2, this._height/2-this._move_r);// 下面的圆
                this.drawRound();
                this.ctx.restore();
                break;
            case 7:
                var ran = 30,
                y1 = this._r/(Math.sin(ran*Math.PI/180)),
                x1 = Math.tan(ran*Math.PI/180)*(this._r + y1);
                this.drawLine({x:-this._r-20,y:-this._r,x1:x1,y1:-this._r});
                this.drawLine({x:x1,y:-this._r,x1:0,y1:y1});
                break;
            case 6:
                var ran6 = 30*Math.PI/180;
                this.drawLine({x:-this._r*Math.cos(ran6),y:-this._r*Math.sin(ran6),x1:0,y1:-this._r/Math.sin(ran6)});
                break;
            case 5:
                this.drawLine({x:-this._r,y:-this._r/2,x1:-this._r,y1:-(this._r+70)});
                this.drawLine({x:-this._r,y:-(this._r+70),x1:this._r-20,y1:-(this._r+70)});
                break;
            case 4:
                this.drawLine({x:0,y:0,x1:0,y1:0});
                this.drawLine({x:0,y:0,x1:0,y1:0});
                break;
            case 3:
                this.drawLine({x:0,y:0,x1:0,y1:0});
                this.drawLine({x:0,y:0,x1:0,y1:0});
                break;
            case 2:
                var ran2 = 40*Math.PI/180;
                this.drawLine({x:-this._r*2/3,y:2*this._r,x1:this._r*6/5,y1:2*this._r});
                this.drawLine({x:-this._r*2/3,y:2*this._r,x1:this._r*6/5,y1:2*this._r - Math.tan(ran2)*(this._r*2/3+this._r*6/5)});
                break;
            case 1:
                this.drawLine({x:0,y:-(this._r+20),x1:0,y1:-(2*this._r+20)});
                this.drawLine({x:0,y:this._r+20,x1:0,y1:2*this._r+20});
                break;
            case 0:
                break;
        }

        this.ctx.restore();
    }
    // 绘制圆
    CanvasObejct.prototype.drawClock = function(x,y){
        this.ctx.beginPath();
        this.ctx.strokeStyle=this.color;
        this.ctx.lineWidth = this.bWidth;
        this.ctx.arc(0, 0, this._r, 0, Math.PI *2, false);
        this.ctx.stroke(); 

        this.ctx.save();
        // 画时针和秒针
        this.ctx.beginPath();
        this.ctx.rotate(this._rorate*Math.PI / 180);
        this.ctx.lineWidth = this.bWidth-2;
        this.ctx.strokeStyle = "#F23316";
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x,-10);
        this.ctx.lineTo(x,this._r - this.bWidth - 45);
        this.ctx.stroke();
        this.ctx.restore();

        this.ctx.save();
        this.ctx.beginPath();
        this.ctx.rotate(this._rorate*3*Math.PI / 180);
        this.ctx.lineWidth = this.bWidth-2;
        this.ctx.strokeStyle = this.color;
        this.ctx.moveTo(x, y);
        this.ctx.lineTo(x,-10);
        this.ctx.lineTo(x,this._r - this.bWidth - 30);
        this.ctx.stroke();
        this.ctx.restore();
    }

    CanvasObejct.prototype.drawRound = function(){
        this.ctx.beginPath();
        this.ctx.strokeStyle=this.color;
        this.ctx.lineWidth = this.bWidth;
        this.ctx.arc(0, 0, this._r, 0, Math.PI *2, false);
        this.ctx.stroke(); 
    }
    CanvasObejct.prototype.drawLine = function(lineObj){
        this.ctx.save();
        this.ctx.translate(this._width/2, (this._height/2) + this._move_r);
        this.ctx.beginPath();
        this.ctx.strokeStyle = this.color;
        this.ctx.lineWidth = this.bWidth;
        this.ctx.moveTo(lineObj.x,lineObj.y);
        this.ctx.lineTo(lineObj.x1,lineObj.y1);
        this.ctx.stroke();
        this.ctx.restore();
    }
    var countDown = new CanvasObejct(StaticUtil.getDom(dom),obj);
    countDown.run();
}