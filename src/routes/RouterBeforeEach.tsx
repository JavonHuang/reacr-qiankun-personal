import {useNavigate,useLocation } from "react-router-dom";
import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import {checkRouter,getErrorRouter} from './index'
const RouterBeforeEach = ()=>{
  const navigate = useNavigate()
  const location = useLocation()
  const [check,setCheck] = useState(false)
  useEffect(() => {
    let obj = checkRouter(location.pathname)
    if (!obj) {
      navigate(getErrorRouter(), { replace: true })
      setCheck(false);
    } else {
      setCheck(true);
    }
  })
  return check ? <Outlet /> : null;
} 

export default RouterBeforeEach