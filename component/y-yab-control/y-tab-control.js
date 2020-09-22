// component/y-yab-control/y-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
       titles:{
         type:Array,
         value:[]
       }
  },

  /**
   * 组件的初始数据
   */
  data: {
    currentIndex:0
  },

  /**
   * 组件的方法列表
   */
  methods: {
      handleItem(event){
        // console.log(event);
        // 1、取出index
        var dataSet=event.currentTarget.dataset;
        var index=dataSet.index;
        var item=dataSet.item;
        console.log(index);
          // 2、修改currentIndex
        this.setData({
          currentIndex:index
        })
          // 3、给页面内部传递数据
        this.triggerEvent("notice",{index,item},{})
      }
  }
})
