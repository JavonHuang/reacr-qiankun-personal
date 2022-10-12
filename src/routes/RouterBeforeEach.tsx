import {useNavigate,useLocation } from "react-router-dom";
import { Outlet } from 'react-router-dom'
import {useEffect,useState} from 'react'
const RouterBeforeEach = ()=>{
  const navigate = useNavigate()
  const location = useLocation()
  const [auth,setAuth] = useState(false)
  useEffect(()=>{
   console.log("测试",location.pathname)
  })
  return <Outlet/>
} 

export default RouterBeforeEach