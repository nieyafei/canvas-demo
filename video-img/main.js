function initVideoImage(str){
    function VideoApp(dom){
        this.element = dom;
        this.newCanvas = document.createElement("canvas");
        this.width= 320;
        this.height = 180;
    }
    VideoApp.prototype.init = function(){
        this.element.addEventListener('loadeddata',()=>{
            this.newCanvas.wdith = this.width;
            this.newCanvas.height = this.height;
            this.newCanvas.getContext("2d").drawImage(this.element, 0, 0, this.width, this.height);

            var img = new Image();
            img.setAttribute("crossOrigin",'Anonymous');
            img.src = this.newCanvas.toDataURL("image/png");
            document.getElementById("video_imgs").appendChild(img);
        })
    }

    var image = new VideoApp(StaticUtil.getDom(str));
    image.init();
}

initVideoImage("#video");
