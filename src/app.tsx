import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";
import 'antd/dist/antd.min.css';
import './index.css';
import { Router } from './routes/index'

const App = (props:any)=>{
  return(
    <HashRouter>
    <Router/>
  </HashRouter>
  )
}

export default App