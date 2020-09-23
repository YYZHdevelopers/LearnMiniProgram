// pages/home/home.js
Page({
  handelShowtoast(){
    wx.showToast({
      title: '添加成功!',
      mask:true,
      image:'/pages/ico/add-circle.png',
      duration:3000,
      success:function(res){
        console.log("调用成功");
      },
      fail:function(err){
        console.log("调用失败");
      },
      complete:function(){
        console.log("调用结束");
      }
    })
  },
  handelShowmodal(){
    wx.showModal({
      title:'请确认地址',
      content:'xx省xx市xxx县xx镇',
      success(res){
        if(res.cancel){
          console.log('用户点击了取消');
        }
        if(res.confirm){
          console.log('用户点击了确认');
        }
      },
      cancelText:'不是',
      cancelColor:'red'
    })
  },
  handelShowloading(){
    wx.showLoading({
      title: 'loading',
      mask:true
    })
  },
  handelShowAction(){
    wx.showActionSheet({
      itemList: ["拍照",'从相册中选择一张'],
      itemColor:'red',
      success:function(res){
       if(res.tapIndex==0){
        // 打开相机
       }
       if(res.tapIndex==1){
        wx.chooseImage({
          count: 9,
        })
       }
      }

    })
  },
  // 用户分享
  onShareAppMessage: function (options) {
    return {
        title:'这是第一次分享',
        path:'/pages/about/about.wxml',
        imageUrl:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1600792624826&di=532d24bfa7f0bc411c78dbd15dd628b6&imgtype=0&src=http%3A%2F%2Ft7.baidu.com%2Fit%2Fu%3D3616242789%2C1098670747%26fm%3D79%26app%3D86%26f%3DJPEG%3Fw%3D900%26h%3D1350'
    }
  }
})