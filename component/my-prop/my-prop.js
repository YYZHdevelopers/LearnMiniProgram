// component/my-prop/my-prop.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
      title:{
        type:String,
        value:"新闻标题",
        observer:function(newVal,oldVal){
          console.log(newVal,oldVal)
        }
      },
      content:{
        type:String,
        value:"坚持依法治党",
        observer:function(newVal,oldVal){
          console.log(newVal,oldVal);
        }
      }
  },
  externalClasses:['titleclass','contentclass'],

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
