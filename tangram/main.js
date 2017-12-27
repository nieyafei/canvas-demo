/**
 * 七巧板的js
 * @param {string} objDom dom
 * @param {object} options 配置
 */
var tangramCanvas = function(objDom,options){
  options = options || {};
  var width = options.width || 800,height = options.height || 800,
  dom = StaticUtil.getDom(objDom);
  /**
   * pointArr
   * 三个点的坐标以及颜色
   */
  var pointArr = [
    {color:'#63B4C9',coord:[[0,0],[0,height],[width/2,height/2]]},
    {color:'#CAFB5C',coord:[[0,0],[width,0],[width/2,height/2]]},
    {color:'#F187C8',coord:[[0,height],[width/2,height],[width/4,height*3/4]]},
    {color:'#9C8BBC',coord:[[width/4,height*3/4],[width/2,height],[width*3/4,height*3/4],[width/2,height/2]]},
    {color:'#F8F214',coord:[[width/2,height/2],[width*3/4,height*3/4],[width*3/4,height/4]]},
    {color:'#E83D59',coord:[[width*3/4,height/4],[width*3/4,height*3/4],[width,height/2],[width,0]]},
    {color:'#F2C121',coord:[[width/2,height],[width,height/2],[width,height]]}
  ];

  this.draw=function(){
    var ctx = dom.getContext('2d');
    pointArr.map(item=>{
      ctx.beginPath();
      ctx.moveTo(item.coord[0][0],item.coord[0][1]);
      item.coord.map(itop=>{
        ctx.lineTo(itop[0],itop[1])
      })
      ctx.closePath();
      ctx.fillStyle = item.color;
      ctx.fill();
    })
  }
  if(StaticUtil.isCanvas(dom)){
    this.draw();
  }
}

tangramCanvas("#canvas",{width:800,height:800});
