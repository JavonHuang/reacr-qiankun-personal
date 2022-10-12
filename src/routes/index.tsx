import { useRoutes } from "react-router-dom";
// import { Suspense, lazy } from 'react'
// import Portal from "../page/portal/Portal";
import RouterBeforeEach from './../routes/RouterBeforeEach'
import Home from "../page/home/Home";
import Test from "../page/test/Test";
import NotFound from "../page/error/NotFound";

let mainRouterPath = '';
let errorRouter = '';
const routes = () => {
  let routerObj ={
    path: '/',
    auth: true,
    component: <RouterBeforeEach />,
    children: [
      {
        path: '/home',
        auth: true,
        component: <Home></Home>
      },
      {
        path: '/test',
        auth:true,
        component:<Test></Test>
      },
      {
        path: '/*',
        auth: false,
        component: <NotFound></NotFound>
      }
    ]
  };
  return [routerObj]; 
}



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

const Router: React.FC<IAPP> = (props) => { 
  mainRouterPath = props.mainRouterPath;
  errorRouter= props.errorRouter;
  return useRoutes(generateRouter(routes(),mainRouterPath));
}

//根据路径获取路由
const findRouter = (routers:any, path:String)=>{
  for (const data of routers) {
    if ( `${mainRouterPath}${data.path}`===path) return data
    if (data.children) {
      const res:any = findRouter(data.children, path)
      if (res) return res
    }
  }
  return null
}

const checkRouter = (path:String)=>{
  let auth = null
  auth = findRouter(routes(),path)
  return auth
}

const getErrorRouter = () => errorRouter;
export{ Router,checkRouter,getErrorRouter}