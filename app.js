App({

  // 生命周期函数
  // 小程序初始化完成时会执行的生命周期函数
  onLaunch: function () {
    console.log("初始化完成onLaunch")

    // 异步调用
    // wx.getUserInfo({
    //   // 数据拿到之后，再进行回调
    //   success: function(res) {
    //     console.log(res)
    //   }
    // })
  },

//  小程序界面显示时执行的生命周期函数
  onShow: function (options) {
    console.log("界面显示 onshow");
  },

//  小程序界面被隐藏时执行
  onHide: function () {
    console.log("界面关闭 onhide");
  },

//  小程序出现错误时执行
  onError: function (msg) {
    
  }
})
