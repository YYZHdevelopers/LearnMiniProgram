// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title:["衣服","鞋子","裤子"]
  },
  handClick(){
    console.log("正在点击");
  },
  handTap(){
    console.log("handTap");
  },
  handTouch(){
    console.log("handTouch");
  },
  handEnd(){
    console.log("handEnd");
  },
  handMove(){
    console.log("handMove");
  },
  handPress(){
    console.log("handPress");
  },
  // touches用于记录当前有几个手指在小程序上出没对应的触摸点的信息
  // currentTouches用于记录手指变化的触摸点信息
  handStart(event){
    console.log("------------",event);
  },
  handEndbtn(event){
    console.log("++++++++++++",event);
  },
  // target用于记录产生事件的组件
  // currentTarget触发事件的组件
  handInner(event){
    console.log("***********",event);
  },
  handOuter(event){
    console.log("&&&&&&&&&&&",event);
  },
  handItemClick(event){
      console.log(event);
      var  dataSet=event.currentTarget.dataset;
      var item=dataSet.item;
      var index=dataSet.index;
      console.log(item,index);
    },
    handCaptureview1(){
      console.log("handCaptureview1");
    },
    handBindview1(){
      console.log("handBindview1");
    },
    handCaptureview2(){
      console.log("handCaptureview2");
    },
    handBindview2(){
      console.log("handBindview2");
    },
    handCaptureview3(){
      console.log("handCaptureview3");
    },
    handBindview3(){
      console.log("handBindview3");
    },
  
})