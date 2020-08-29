// pages/image/image.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imagePath:"",
    err:""
  },

  handelChooseClick(){
    var _this=this;
    // 调用系统API,让用户选择图片
    wx.chooseImage({
      success: function(res){
        // 取出路径
        var path=res.tempFilePaths[0];

        _this.setData({
          imagePath:path
        })
      },
    })
  },

  handClick(){
    console.log("图片加载完成");
  },

  handleErr(event){
    var _this = this;
    _this.setData({
      err:"错误"
    })
  }
})