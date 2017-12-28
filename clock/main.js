const clockPointArr = [
  [
    [0, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 0, 1, 1, 0],
    [0, 0, 1, 1, 1, 0, 0]
  ], //0
  [
    [0, 0, 0, 1, 1, 0, 0],
    [0, 1, 1, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [1, 1, 1, 1, 1, 1, 1]
  ], //1
  [
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 1, 1, 1, 1, 1]
  ], //2
  [
    [1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 1, 1, 1, 0]
  ], //3
  [
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 1, 0],
    [0, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 0, 1, 1, 0],
    [1, 1, 0, 0, 1, 1, 0],
    [1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 1, 1]
  ], //4
  [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 1, 1, 1, 0]
  ], //5
  [
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 0, 0, 0],
    [1, 1, 0, 0, 0, 0, 0],
    [1, 1, 0, 1, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 1, 1, 1, 0]
  ], //6
  [
    [1, 1, 1, 1, 1, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 0, 0, 0]
  ], //7
  [
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 1, 1, 1, 0]
  ], //8
  [
    [0, 1, 1, 1, 1, 1, 0],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [1, 1, 0, 0, 0, 1, 1],
    [0, 1, 1, 1, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 0, 1, 1],
    [0, 0, 0, 0, 1, 1, 0],
    [0, 0, 0, 1, 1, 0, 0],
    [0, 1, 1, 0, 0, 0, 0]
  ], //9
  [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 1, 1, 0],
    [0, 1, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ], //:
  [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],

  ] //-
];

/**
 * 炫酷时钟效果
 * @param {string} objDom 时钟对象
 * @param {object} obj 对象参数
 */

var clockCanvas = function(objDom, obj) {

  // 构造函数
  var CanvasIndex = function(Dom, options) {
    options = options || {}
    this.Element = Dom;
    this.ctx = Dom.getContext("2d");
    this.width = options.width || 0;
    this.height = options.height || 0;
    this.stop = false;
    this.prevTime = "";
    this.paddingTop = 260; // 距离上边框的距离
    this.paddingLeft = 60; // 左边框的距离
    this.radius = 0; // 半径
    this.ballArr = [];
    this.color = ['#c23531', '#2f4554', '#61a0a8', '#d48265', '#91c7ae', '#749f83', '#ca8622', '#bda29a', '#6e7074', '#546570', '#c4ccd3'];
  }
  // 执行方法
  CanvasIndex.prototype.run = function() {
    this.width = StaticUtil.getWindowWiHe().width - 16;
    this.height = StaticUtil.getWindowWiHe().height - 16;
    this.radius = (this.width - this.paddingLeft * 2) / (2 * (17 * 7 + 26));
    this.ballArr = [];

    this.Element.width = this.width;
    this.Element.height = this.height;
    this.prevTime = this.getTimesObj(); // 第一次数值
    this.draw();
    setInterval(() => {
      this.ctx.clearRect(0, 0, this.width, this.height);
      this.update();
    }, 50);
  }

  CanvasIndex.prototype.draw = function() {
    // 年
    this.drawTime(this.paddingLeft, this.paddingTop, parseInt((this.prevTime.year + "").slice(0, 1)));
    this.drawTime(this.paddingLeft + 15 * this.radius, this.paddingTop, parseInt((this.prevTime.year + "").slice(1, 2)));
    this.drawTime(this.paddingLeft + 30 * this.radius, this.paddingTop, parseInt((this.prevTime.year + "").slice(2, 3)));
    this.drawTime(this.paddingLeft + 45 * this.radius, this.paddingTop, parseInt((this.prevTime.year + "").slice(3, 4)));

    // 间隔-
    this.drawTime(this.paddingLeft + 60 * this.radius, this.paddingTop, 11);
    // 月
    this.drawTime(this.paddingLeft + 75 * this.radius, this.paddingTop, parseInt((this.prevTime.month + "").slice(0, 1)));
    this.drawTime(this.paddingLeft + 90 * this.radius, this.paddingTop, parseInt((this.prevTime.month + "").slice(1, 2)));
    this.drawTime(this.paddingLeft + 105 * this.radius, this.paddingTop, 11);
    // 日
    this.drawTime(this.paddingLeft + 120 * this.radius, this.paddingTop, parseInt((this.prevTime.day + "").slice(0, 1)));
    this.drawTime(this.paddingLeft + 135 * this.radius, this.paddingTop, parseInt((this.prevTime.day + "").slice(1, 2)));

    // 小时
    this.drawTime(this.paddingLeft + 165 * this.radius, this.paddingTop, parseInt((this.prevTime.h + "").slice(0, 1)));
    this.drawTime(this.paddingLeft + 180 * this.radius, this.paddingTop, parseInt((this.prevTime.h + "").slice(1, 2)));
    this.drawTime(this.paddingLeft + 197 * this.radius, this.paddingTop, 10); // 7
    // 分
    this.drawTime(this.paddingLeft + 207 * this.radius, this.paddingTop, parseInt((this.prevTime.m + "").slice(0, 1)));
    this.drawTime(this.paddingLeft + 222 * this.radius, this.paddingTop, parseInt((this.prevTime.m + "").slice(1, 2)));
    this.drawTime(this.paddingLeft + 239 * this.radius, this.paddingTop, 10);
    // 秒
    this.drawTime(this.paddingLeft + 249 * this.radius, this.paddingTop, parseInt((this.prevTime.s + "").slice(0, 1)));
    this.drawTime(this.paddingLeft + 264 * this.radius, this.paddingTop, parseInt((this.prevTime.s + "").slice(1, 2)));
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
  // 动画更新
  CanvasIndex.prototype.update = function() {
    var nextTime = this.getTimesObj();
    if (nextTime.h !== this.prevTime.h) {
      // 小时更新
      if (nextTime.h.slice(0, 1) !== this.prevTime.h.slice(0, 1)) {
        this.setBall(this.paddingLeft + 165 * this.radius, this.paddingTop, parseInt((this.prevTime.h + "").slice(0, 1)));
      }
      if (nextTime.h.slice(1, 2) !== this.prevTime.h.slice(1, 2)) {
        this.setBall(this.paddingLeft + 180 * this.radius, this.paddingTop, parseInt((this.prevTime.h + "").slice(1, 2)));
      }
    }
    if (nextTime.m !== this.prevTime.m) {
      // 分钟更新
      if (nextTime.m.slice(0, 1) !== this.prevTime.m.slice(0, 1)) {
        this.setBall(this.paddingLeft + 207 * this.radius, this.paddingTop, parseInt((this.prevTime.m + "").slice(0, 1)));
      }
      if (nextTime.m.slice(1, 2) !== this.prevTime.m.slice(1, 2)) {
        this.setBall(this.paddingLeft + 222 * this.radius, this.paddingTop, parseInt((this.prevTime.m + "").slice(1, 2)));
      }
    }
    if (nextTime.s !== this.prevTime.s) {
      if (nextTime.s.slice(0, 1) !== this.prevTime.s.slice(0, 1)) {
        this.setBall(this.paddingLeft + 249 * this.radius, this.paddingTop, parseInt((this.prevTime.s + "").slice(0, 1)));
      }
      if (nextTime.s.slice(1, 2) !== this.prevTime.s.slice(1, 2)) {
        this.setBall(this.paddingLeft + 264 * this.radius, this.paddingTop, parseInt((this.prevTime.s + "").slice(1, 2)));
      }
    }
    this.prevTime = nextTime;
    this.draw();
    this.drawBall();
  }
  // 记录球数据
  CanvasIndex.prototype.setBall = function(x, y, timer) {
    clockPointArr[timer].map((item, i) => {
      item.map((item2, j) => {
        if (item2 === 1) {
          this.ballArr.push({
            x: x + (this.radius * (2 * j + 1)),
            y: y + (this.radius * (2 * i + 1)),
            vx: (Math.random() > 0.5 ? -1 : 1) * Math.ceil(Math.random() * 4 + 1),
            vy: -1 * Math.ceil((Math.random() * 10)),
            g: 1.5 + Math.random(),
            color: this.color[Math.floor(Math.random() * this.color.length)]
          });
        }
      })
    })
    let new_arr = [];
    this.ballArr.map(item => {
      if (item.x >= 0 && item.x <= this.width) {
        new_arr.push(item);
      }
    })
    this.ballArr = new_arr;
  }
  // 开始画小球
  CanvasIndex.prototype.drawBall = function() {
    this.ballArr.map(item => {
      item.x += item.vx;
      item.y += item.vy;
      item.vy += item.g;
      if (item.y >= (this.height - this.radius)) {
        item.y = this.height - this.radius;
        item.vy = -item.vy * 0.8
      }

      this.ctx.beginPath();
      this.ctx.arc(item.x, item.y, this.radius + 1, 0, Math.PI * 2);
      this.ctx.fillStyle = item.color;
      this.ctx.fill();
    })
  }
  // 开始画数字
  CanvasIndex.prototype.drawTime = function(x, y, timer) {
    // 开始绘画
    //this.ctx.clearRect(0, 0, this.width, this.height);
    clockPointArr[timer].map((item, i) => {
      item.map((item2, j) => {
        if (item2 === 1) {
          this.ctx.beginPath();
          this.ctx.arc(x + (this.radius * (2 * j + 1)), y + (this.radius * (2 * i + 1)), this.radius - 1, 0, Math.PI * 2);
          this.ctx.fillStyle = "#1BA4F6";
          this.ctx.fill();
        }
      })
    })
  }
  var newCanvas = new CanvasIndex(StaticUtil.getDom(objDom), obj);

  function init() {
    newCanvas.run();
  }
  init();
  window.onresize = function() {
    init();
  }
}

clockCanvas("#canvas");
