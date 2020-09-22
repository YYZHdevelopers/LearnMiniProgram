// pages/home/home.js
import request from "../server/server"
Page({

  
  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 1、原始的网络请求方法
    // this.get_origin_request();

    // 2、封装工具函数的网络请求方法
    request({
      url:'http://152.136.185.210:8000/api/z8/recommend'
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })

  },
  get_origin_request(){

     // 网络请求
    // wx.request({
    //   // 1、普通网络请求
    //   url: 'http://httpbin.org',
    //   success:function(res){
    //       console.log(res);
    //   },
      
    // })
    wx.request({
      url: 'http://httpbin.org/post',
      method:'post',
      data:{
        name:"yyzh",
        age:"20"
      },
      success:function(res){
        console.log(res);
      },
      fail:function(err){
        console.log(err);
      }
    }),
    wx.request({
      url: 'http://152.136.185.210:8000/api/z8/recommend',
      success:function(res){
        console.log(res);
      }
    })
  }



  
})