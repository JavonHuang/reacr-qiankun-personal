
import { Button } from 'antd';
import React, { useEffect} from 'react'
import {useSearchParams,useLocation ,useParams } from "react-router-dom";
const Home = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  const location =useLocation()
  const params = useParams()
  console.log(params)
  console.log(searchParams.get('age'))
  console.log(searchParams.get('name'))
  console.log(location)
  return(
    <div>
      <div>从system HelloWorld 跳转过来，获取URL上参数</div>
      <div>{searchParams.get('age')}</div>
      <div>{ searchParams.get('name')}</div>
    </div>
  )
}

export default Home