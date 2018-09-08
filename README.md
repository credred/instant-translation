# instant-translation
在线页面[cqiufan.cn](https://www.cqiufan.cn)
> A mobile phone translation application  
利用axios向后台发送请求，后台nginx转发请求给express，express利用translation.js伪造浏览器向百度翻译发送post请求得到翻译结果并返回给页面。
前台方面，使用了vue做单页应用。
## 技术栈
vue vuex vue-router axios
- [x] **翻译页面**
  - [x] 头组件(包含标题和搜索栏)
  - [x] 候选词组件
  - [x] 翻译结果组件
- [] **收藏页面**
  - [] 收藏列表组件
  - [] 收藏词组件
- [x] **banner组件** 
## 目录结构
 .  
├── README.md   
├── build              // 构建服务和webpack配置  
├── config             // 项目不同环境的配置  
├── dist               // 项目build目录  
├── index.html         // 项目入口文件  
├── package.json       // 项目配置文件  
├── src                // 生产目录  
│&nbsp;&nbsp;&nbsp;&nbsp;├── assets         // css js 和图片资源  
│&nbsp;&nbsp;&nbsp;&nbsp;├── components     // 各种组件  
│&nbsp;&nbsp;&nbsp;&nbsp;├── main.js        // Webpack 预编译入口  

## 路由结构
 .  
├── translate          // 翻译页面  
│&nbsp;&nbsp;&nbsp;&nbsp;├── index          // 首页  
│&nbsp;&nbsp;&nbsp;&nbsp;├── candidate      // 候选词  
│&nbsp;&nbsp;&nbsp;&nbsp;├── result         // 搜索结果  
├── favorite           // 收藏页面  
│&nbsp;&nbsp;&nbsp;&nbsp;├── index          // 收藏词列表  
│&nbsp;&nbsp;&nbsp;&nbsp;├── item           // 收藏词详情  
