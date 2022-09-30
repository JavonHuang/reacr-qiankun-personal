import './portal.scss'
import LeftSide from './LeftSide'
import TopHeader from './TopHeader'
import RouterBeforeEach from './../../routes/RouterBeforeEach'

const Portal =()=>{
  return (
    <div className="portal">
      <LeftSide/>
      <div className="portal-right">
        <TopHeader></TopHeader>
        <div className="portal-context">
          <RouterBeforeEach/>
        </div>
      </div>
    </div>
  );
}

export default Portal
