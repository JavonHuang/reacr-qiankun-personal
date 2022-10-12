import { useRoutes } from "react-router-dom";
import { Suspense, lazy } from 'react'
import Login from "./../page/login/Login";
import Home from "../page/home/Home";
import NotFound from "../page/error/NotFound";
const routes =()=> [
  {
    path: '/',
    auth:false,
    name: '/',
    component:<Login></Login>,
  },
  { 
    path: '/home',
    name: 'home',
    auth:true,
    component:<Home></Home>
  },
  { 
    path: '/home',
    auth:true,
    component:lazy(() => import('../page/home/Home'))
  },
  {
    path: '*',
    auth:false,
    component:<NotFound></NotFound>
  },
]



// 路由处理方式
const generateRouter = (routers:any,mainRouterPath:string) => {
  return routers.map((item:any) => {
    if (item.children) {
      item.children = generateRouter(item.children,mainRouterPath)
    }
    item.path = `${mainRouterPath}${item.path}`
    item.element=item.component
    // item.element = <Suspense fallback={
    //   <div>加载中...</div>
    // }>
    //   {/* 把懒加载的异步路由变成组件装载进去 */}
    //   <item.component />
    // </Suspense>
    return item
  })
}

const Router : React.FC<IAPP>= (props) => useRoutes(generateRouter(routes(),props.mainRouterPath))

export{ Router}