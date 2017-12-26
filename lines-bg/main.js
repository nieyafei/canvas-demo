/**
 * 背景线条canvasjs
 * @param {string} domClass 容器参数
 * @param {object} objs 参数
 */

var linesBgCanvas = function(domClass, objs) {
  var clientWidth = 0, // 屏幕显示宽度
    clientHeight = 0; // 显示高度
  // 构造函数
  function CanvasIndex(obj, options) {
    getWidthHeight();
    obj.setAttribute("width", clientWidth - 16 + "px");
    obj.setAttribute("height", clientHeight - 16 + "px");
    options = options || {};
    this.DomElement = obj;
    this.ctx = obj.getContext("2d"); // 获取画图
    this.clicked = options.clicked || false; // 是否鼠标可以点击
    this.moved = options.moved || false; // 是否跟随可以移动
    this.length = options.length || 300; // 线条数
    this.lineLength = 100; // 线的长度
    this.arrList = [];// 生成的点的数组
    this.off_ctx = document.createElement("canvas");
    this.paused = true;
  }
  // 开始执行
  CanvasIndex.prototype.init = function() {
    if (this.clicked) {
      this.DomElement.addEventListener("click", this.click.bind(this));
    }
    if (this.moved) {
      this.DomElement.addEventListener("mousemove", this.moveXY.bind(this), false); // 移动
      this.DomElement.addEventListener("mouseout", this.moveoutXY.bind(this), false); // 离开
    }
    this.draw(this.getLength());
  }
  CanvasIndex.prototype.getLength = function() {
    var arr = [];
    for (var i = 0; i < this.length; i++) {
      arr.push({
        x: parseInt(Math.random() * this.DomElement.width),
        y: parseInt(Math.random() * this.DomElement.height),
        r: parseInt(Math.random() * 10),
        controlX: parseInt(Math.random() * 10) > 5 ? 'left' : 'right',
        controlY: parseInt(Math.random() * 10) > 5 ? 'bottom' : 'top'
      })
    }
    return arr;
  }
  // 开始点击
  CanvasIndex.prototype.click = function(e){
    var event = e || window.event;
    this.arrList.push({
      x: event.clientX,
      y: event.clientY,
      r: parseInt(Math.random() * 10),
      controlX: parseInt(Math.random() * 10) > 5 ? 'left' : 'right',
      controlY: parseInt(Math.random() * 10) > 5 ? 'bottom' : 'top'
    })
  }

  // 鼠标滑动
  CanvasIndex.prototype.moveXY = function(e){
    var event = e || window.event;
    var obj = {
      x: event.clientX,
      y: event.clientY,
      r: 0,
      controlX: parseInt(Math.random() * 10) > 5 ? 'left' : 'right',
      controlY: parseInt(Math.random() * 10) > 5 ? 'bottom' : 'top',
      move:true
    }
    if(this.arrList[0].move){
      this.arrList[0].x = event.clientX;
      this.arrList[0].y = event.clientY;
      this.arrList[0].r = 1;
    }else{
      this.arrList.unshift(obj);
    }
  }
  // 鼠标移开
  CanvasIndex.prototype.moveoutXY = function(e){
    this.arrList.shift();
  }
  // 开始画图
  CanvasIndex.prototype.draw = function(list) {
    var new_arr = [],
      line_arr = [];
    list.map((item, index) => {
      var xy = this.controlXY(item)
      new_arr.push(this.controlRound(xy));
    })
    new_arr.map((item1, index1) => {
      new_arr.map((item2, index2) => {
        if (item1 !== item2) {
          var x = item1.x - item2.x;
          var y = item1.y - item2.y;
          if (Math.abs(x) < this.lineLength && Math.abs(y) < this.lineLength) {
            line_arr.push({
              x1: item1.x,
              y1: item1.y,
              x2: item2.x,
              y2: item2.y
            });
          }
        }
      })
    })
    line_arr.map(item => {
      // 划线
      this.drawLiner(item);
    })

    new_arr.map(item => {
      // 画点
      this.drawRound(item);
    })

    this.arrList = new_arr;
    this.ctx.drawImage(this.off_ctx, 0, 0, this.DomElement.width, this.DomElement.height);
    setTimeout(()=>{
      if(this.paused){
        this.next();
      }
    }, 50)
  }
  CanvasIndex.prototype.next = function() {
    // 清楚
    this.ctx.clearRect(0, 0, this.DomElement.width, this.DomElement.height);
    this.ctx.clearRect(0, 0, this.DomElement.width, this.DomElement.height);
    this.draw(this.arrList);
  }
  CanvasIndex.prototype.drawLiner = function(obj) {
    //console.log(obj)
    this.ctx.beginPath();
    this.ctx.moveTo(obj.x1, obj.y1);
    this.ctx.lineTo(obj.x2, obj.y2)
    this.ctx.lineWidth = 1;
    this.ctx.strokeStyle = "rgba(0,0,0,0.02)";
    this.ctx.stroke();
    this.ctx.closePath();
  }
  CanvasIndex.prototype.drawRound = function(obj) {
    this.ctx.beginPath();
    this.ctx.arc(obj.x, obj.y, obj.r, 0, Math.PI * 2);
    this.ctx.fillStyle = "rgba(0,0,0,0.2)";
    this.ctx.fill();
    this.ctx.closePath();
  }
  CanvasIndex.prototype.controlXY = function(item) {
    if (item.x >= (this.DomElement.width - item.r)) {
      item.controlX = 'left';
    } else if (item.x <= parseInt(item.r / 2)) {
      item.controlX = 'right';
    }
    if (item.y >= (this.DomElement.height - item.r)) {
      item.controlY = 'bottom';
    } else if (item.y <= parseInt(item.r / 2)) {
      item.controlY = 'top';
    }
    return item;
  }

  CanvasIndex.prototype.controlRound = function(xy) {
    switch (xy.controlX) {
      case 'right':
        xy.x++;
        break;
      case 'left':
        xy.x--;
        break;
    }
    switch (xy.controlY) {
      case 'bottom':
        xy.y--;
        break;
      case 'top':
        xy.y++;
        break;
    }
    return xy;
  }

  function getDom() {
    if (domClass.startsWith(".")) {
      return document.getElementsByClassName(domClass.slice(1))[0]
    }
    return document.getElementById(domClass.slice(1));
  }

  function getWidthHeight() {
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
    console.log(clientWidth, clientHeight)
  }
  // 执行方法
  var rootCanvas = getDom();

  function run() {
    (new CanvasIndex(rootCanvas, objs)).init();
  }
  run();
  // 监控浏览器高度和宽度的变化
  window.resize = function() {
    run();
  }
}
