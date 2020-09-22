// component/my-mslot/my-mslot.js
// component构造器
Component({
  /**
   * 组件的属性列表
   */
  // 定义组件的配置选项
  options:{
    multipleSlots:true
  },
  // 让使用者给组件传入数据
  properties: {

  },
  // 定义组件内部的初始化数据
  data:{
  },
  // 用于定义组件内部函数
  method:{
   
  },
  // 外界给组件传入额外的样式
  externalClasses:[],
  // 可以监听properties/data的改变
  observers:{
    counter:function(newVal){
      console.log(newVal)
    }
  },
  // 组件中监听生命周期函数
  /*
    1、监听所在页面的声明周期
    2、监听组件本身的声明周期  
  */
//   1、监听所在页面的声明周期
pageLifetimes:{
    show(){
      console.log('监听组件所在页面显示出来');
    },
    hide(){
      console.log("监听组件所在页面隐藏起来");
    }
},
// 2、监听组件本身的声明周期  
lifetimes:{
  created(){
    console.log("组件被创建出来");
  },
  attached(){
    console.log("组件被添加到页面");
  },
  ready(){
    console.log("组件被渲染出来");
  },
  moved(){
    console.log("组件被移动");
  },
  detached(){
    console.log("组件被移除");
  }
}
})
