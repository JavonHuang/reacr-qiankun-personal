declare global {  //设置全局属性
  export interface Window {  //window对象属性
    __POWERED_BY_QIANKUN__: boolean;   //加入对象
  }

  export interface IAPP {  //window对象属性
    mainRouterPath: string;   //主应用路由前缀
    errorRouter: string;   //主应用错误路由
  }

  export interface Vue {  //window对象属性
  }
}
export {}