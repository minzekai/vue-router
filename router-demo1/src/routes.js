// import RouterDemo from './components/RouterDemo'
// import RouterChildDemo from './components/RouterChildDemo'


// //配置routes的属性
// const routes = [
//     //path:访问路径，component:对应的页面，name:传过去的值
//         //主页面的显示
//         {path:'/',component:RouterDemo,name:'index'},
//     {path:'/foo',component:RouterDemo,name:'1'},
//     {path:'/bar',component:RouterDemo,name:'12'},
//     //:id ：访问时传入的参数
//     {path:'/user/:id',component:RouterDemo,name:'参数',props:true},
//     //子页面的的访问
//     {path:'/user/:id', component:RouterDemo,name:'子页面的测试',props:true,
//         children:[
//             {path:"profile",component:RouterChildDemo,name:"子页面属性"}
//         ]

//     }   

// ];

const routes=[
    //初始界面的显示
    {path:'/',component:()=>import("./view/home/index")},
    //主界面的显示
    {path:'/home',component:()=>import("./view/home/index"),props:true,},
     //博客界面
                    {path:'/blog',component:()=>import("./view/blog/BlogList.vue"),props:true},
                    {path:"/detail/:id",component:()=>import("./view/blog/BlogDetail"),props:true},
                    //问答界面
                    {path:'/question',component:()=>import("./view/a&q/Question"),props:true},
                    {path:"/answer/:list",component:()=>import("./view/a&q/Answer"),props:true},

                    //商城界面
                    {path:"/shop",component:()=>import("./view/shop/index"),props:true},
                    //个人中心
                    {path:'/user/:username',component:()=>import("./view/user/userInfo"),props:true},
                    //百度
                    // {path:'/baidu',component:  "https://www.baidu.com/",props:true,external:true}
    
]

export default routes;