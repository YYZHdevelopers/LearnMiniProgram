// pages/scroll/scroll.js
Page({

  data: {

  },
  handScroll(event){
      console.log("正在滚动",event.detail.scrollLeft);
  },
  handToupper(){
      console.log("到左边了~")
  },
  handLower(){
    console.log("到右边了~");
  }
})