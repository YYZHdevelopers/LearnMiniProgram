// pages/input/input.js
Page({

  data: {
    idcard:""
  },
  
  handinput(event) {
    console.log("用户正在输入", event.detail.value);
    var val = event.detail.value
    var _this=this;
    _this.setData({
        idcard:val
    })
  },
  handfocus(event){
    console.log("焦点触发",event);
  },
  handblur(event){
    console.log("失去焦点",event);
  },
})