// pages/home/home.js

// getApp()会获取App()产生的示例对象
var app=getApp();
var name=app.globalDate.Admin_name;


Page({
  

  handelGetuserInfo(event){
    console.log(event);
  },

  /**
   * 页面的初始数据
   */
  data: {
    name: name,
  }
})