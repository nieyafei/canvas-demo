/**
 * Canvas背景虚化
 */
var CanvasLineBg = function(obj, options) {
  options = options || {};

  function CanvasIndex(Dom) {
    this.DomElement = Dom;
    this.number = options.number || 300; // 循环点的数据
    this.arrList = [];
    this.winWiHi = StaticUtil.getWindowWiHe();
    this.ctx = Dom.getContext("2d");
    this.lineLength = 80;
  }

  CanvasIndex.prototype.run = function() {
    this.DomElement.width = this.winWiHi.width - 16;
    this.DomElement.height = this.winWiHi.height - 16;
    this.getArr();
    this.start();
  }
  CanvasIndex.prototype.start = function() {
    var arrAn = [];
    /*
    this.arrList.map(item => {
      if (item.x < 0) {
        item.xp = true;
      } else if (item.x > this.winWiHi.width) {
        item.xp = false;
      }
      if (item.y < 0) {
        item.yp = false;
      } else if (item.y > this.winWiHi.height) {
        item.yp = true;
      }
      item.xp ? item.x++ : item.x--;
      item.yp ? item.y-- : item.y++;
    })
    */
    this.draw(this.arrList);

    function st() {
      st.prototype = CanvasIndex.prototype;
    }
    //this.ctx.drawImage(document.createElement("canvas"), 0, 0, this.DomElement.width, this.DomElement.height);
    setTimeout(() => {
      //this.ctx.clearRect(0, 0, this.DomElement.width, this.DomElement.height); //清楚绘制
      this.start();
    }, 50)
  }
  CanvasIndex.prototype.draw = function(list) {
    this.ctx.fillStyle = 'rgba(0, 0, 0, .05)';
    this.ctx.fillRect(0, 0, this.DomElement.width, this.DomElement.height);
    list.map(item => {
      if (item.x < 0) {
        item.xp = true;
      } else if (item.x > this.winWiHi.width) {
        item.xp = false;
      }
      if (item.y < 0) {
        item.yp = false;
      } else if (item.y > this.winWiHi.height) {
        item.yp = true;
      }
      item.xp ? item.x++ : item.x--;
      item.yp ? item.y-- : item.y++;
      list.map(item2 => {
        var absx = Math.abs(item.x - item2.x),
          absy = Math.abs(item.y - item2.y);
        if (absy > 0 && absx > 0 && absy <= this.lineLength && absx <= this.lineLength) {
          // 开始画图
          this.ctx.beginPath();
          this.ctx.moveTo(item.x, item.y);
          this.ctx.lineTo(item2.x, item2.y);
          this.ctx.strokeStyle = "hsla(" + ((item.hue + item2.hue) / 2) + ",80%,50%,0.05)";
          this.ctx.stroke();
        }
      })
    })
  }

  CanvasIndex.prototype.getArr = function() {
    var new_arr = [];
    for (var i = 0; i < this.number; i++) {
      new_arr.push({
        x: parseInt(Math.random() * this.winWiHi.width),
        y: parseInt(Math.random() * this.winWiHi.height),
        xp: parseInt(Math.random() * 10) > 5, // x移动方向 true:left  false:right
        yp: parseInt(Math.random() * 10) > 5, // y移动方向 true:top  false:bottom
        hue: parseInt(Math.random() * 360)
      })
    }
    this.arrList = new_arr;
    return new_arr;
  }

  function init() {
    (new CanvasIndex(StaticUtil.getDom(obj))).run();
  }
  init();
  window.resize = function() {
    init();
  }
}

CanvasLineBg("#canvas");
