// pages/example/example.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      isShow:true,
      score:"",
      isShow_res:true
  },
  handAsk(){ 
    this.setData({
      isShow_res:!this.data.isShow_res,
    });
    if(this.data.score<100){
      this.setData({
        isShow:true,
      })
    }
    if(this.data.score>100){
        this.setData({
          isShow:false,
          isShow_res:true
        })
    }
     
  },
  handInput(event){
   console.log("用户正在输入",event.detail.value);
   this.setData({
     score:event.detail.value,
     isShow_res:true
   })
   
}
  
})