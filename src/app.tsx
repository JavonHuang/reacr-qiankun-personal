import ReactDOM from 'react-dom';
import {HashRouter} from "react-router-dom";
import 'antd/dist/antd.min.css';
import './index.css';
import { Router } from './routes/index'
import RouterBeforeEach from './routes/RouterBeforeEach';

const App: React.FC<IAPP> = (props)=>{
  return(
    <HashRouter>
      <Router {...props} >
        <RouterBeforeEach/>
      </Router>
  </HashRouter>
  )
}

export default App