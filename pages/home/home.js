// pages/home/home.js

// getApp()会获取App()产生的示例对象
var app=getApp();
var name=app.globalDate.Admin_name;


Page({
  /**
   * 页面的初始数据
   */
   // ----------------------2、初始化数据--------------------
  data: {
    name: name,
  },

  

  // ----------------------1、监听生命函数--------------------
  // 1、页面被加载出来时
  onLoad:function(){
    console.log("onLoad"); 
  },
  // 2、页面初次渲染完成时
  onReady: function (){
    console.log("onReady");
  },
  // 3、页面显示出来时
  onShow: function (){
    console.log("onShow");
  },
  // 4、页面被隐藏时
  onHide: function (){
    console.log("onHide");
  },
  // 5、页面被切换掉时
  onUnload: function (){

  },
   // ----------------------3、监听相关事件--------------------
  handelGetuserInfo(event) {
    console.log(event.detail.rawData);
  },
  handelViewClick(){
    console.log("name被点击");
  },

   // ----------------------4、监听其他事件--------------------

  // 监听页面滚动
  onPageScroll(obj){

    // console.log(obj);
  },
  // 监听页面滚动到底部
  onReachBottom(){
    console.log("页面到底了~");
  },
  // 监听用户下拉刷新
  onPullDownRefresh(){
    console.log("正在刷新~");
  },
  // 监听tab触发
  onTabItemTap(item){
    console.log(item.pagePath);
  }
})
