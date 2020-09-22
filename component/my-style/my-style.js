// component/my-style/my-style.js
Component({
  options:{
    styleIsolation:"apply-shared"
  /*
    该属性的可选值：
      ——isolated:启用样式隔离，互相之间不产生影响
      ——apply-shared:页面wxss样式影响自定义组件，但自定义组件wxss不会影响页面
      ——shared:表示页面wxss样式会影响到自定义组件，自定义组件wxss指定的样式也会影响页面的其他设置
  
  */ 

  }
})
