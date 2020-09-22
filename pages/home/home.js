// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    textMsg:["高定","新品","冬季"]
  },
  handleIncreaBtn(){
    // 获取组件对象
    var my_sel=this.selectComponent("#sel-id");
    
    console.log(my_sel);
    // 修改对象数据(不合理)
    // my_sel.setData({
    //   counter:my_sel.data.counter+20
    // })
    // 合理的做法
    my_sel.itcream(10);


  }
})