// pages/wxml/wxml.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    message:"中国",
    lastname:"Tang",
    firstname:"vector",
    age:20,
    nowTime:new Date().toLocaleString() ,
    isActive:false,
    isShow:true,
    score:56,
    number:[
      [11,12,13],
      [21,22,23],
      [31,32,33]
    ],
    hobby:["play basketball","coding","play computergames","play the piano"],
    zim:["a","b","c"]
  },
  onLoad(){
    setInterval(()=>{
      this.setData({
        nowTime:new Date().toLocaleString() 
      })
    })
  },
  handClick(){
    this.setData({
      isActive:!this.data.isActive
    })
  },
  handIncrease(){
    this.setData({
      score:this.data.score+6
    })
  }
})