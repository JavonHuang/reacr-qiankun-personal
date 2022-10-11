declare global {  //设置全局属性
  export interface Window {  //window对象属性
    __POWERED_BY_QIANKUN__: boolean;   //加入对象
  }

  export interface IAPP {  //window对象属性
    mainRouterPath: string;   //加入对象
  }
}
export {}