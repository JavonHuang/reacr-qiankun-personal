
import { Button } from 'antd';
import { useEffect} from 'react'
import lib from './../../lib';
const VueComponent = () => {
  useEffect(() => { 
    lib.renderVue();
  },[])

  return(
    <div>
      渲染主应用所加载Vue组件库组件
      <div id="test"></div>
    </div>
  )
}

export default VueComponent