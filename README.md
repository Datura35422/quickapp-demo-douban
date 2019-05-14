# quickapp-demo-douban
快应用，豆瓣电影demo
样式&接口参考项目：[quick-app-douban]<https://github.com/keenjaan/quick-app-douban>

---

##### 修改部分

Home/index.ux: 首页使用了tabs，参考官网的tabs懒加载，但是有延迟更新render属性的bug。

Home/movie/index.ux: 修改了tabs使用，改用了list

请求方式不同，

项目结构不同（待优化，我觉得我的组件部分有点深了，使用less变量，在快应用IDE中会提示错误，但是能正常渲染）

没有修改主题和左侧的主页菜单

子组件事件监听方式不同

