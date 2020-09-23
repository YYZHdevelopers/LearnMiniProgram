// pages/about/about.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onShareAppMessage:function(option){
    return{title:'这是首页',
    path:'/pages/home/home.wxml'}
  }

  
})