import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../contexts/UserContextProvider'
import mongoosy from 'mongoosy/frontend';
const { Login } = mongoosy;

const Operator = () => {
  const {updateUserStatus} = useContext(UserContext);
  const [socketroom, setSocketRoom] = useState("default")

  const logout = async() => {
    await Login.logout();
    updateUserStatus({ user: false });
  }

  return (
    <div className="container">

      <div className='admin-panel' >
        <div className='left-col' style={{marginTop: '230px'}}>
          <input type='text' value='OPERATOR' disabled/>
          <input type='button' value='LOG OUT' onClick={()=>logout()}/>  
          <Link to={"/controlboard/"+ socketroom} style={{ textDecoration: 'none' }}>
              <input type='button' value='FOOTBALL'/> 
            </Link> 
        </div> 
        <div className="right-col">
          <div className='settings'>
            <input type='text' value='FOOTBALL SETTINGS' disabled/> 
          </div>
          <hr/>
          <div style={{margin: '5px auto'}}>
      <h6 style={{color: 'rgb(0, 142, 207)', margin: '3px', textAlign: 'center'}}>ENTER ROOM NAME</h6> 
      <input type="text" className="select-game" placeholder="default"
        style={{padding: '5px 5px', fontSize: '16px', width: '395px', borderRadius: '10px', textAlign: 'left', color: "black", 
          outline: 'none', margin: '0 auto', display:'flex'}}
          onChange={e=>setSocketRoom(e.target.value)}
        >
      </input>
    </div>          
        </div>  
      </div>



      <div className="background">
        <svg className="background" viewBox="0 0 1874 1080.446">
          <path fill="rgba(68,149,255,0.651)" stroke="rgba(0,0,0,0.329)" strokeWidth="100px" 
            strokeLinejoin="miter" strokeLinecap="butt" strokeMiterlimit="4" shapeRendering="auto" 
            id="Path_4" 
            d="M 416.2294006347656 -2.817545237121521e-07 L 1457.770751953125 -2.817545237121521e-07 C 
              1687.64794921875 -2.817545237121521e-07 1874.000122070313 192.5970764160156 1874.000122070313 
              430.1777038574219 L 1874.000122070313 650.2685546875 C 1874.000122070313 887.84912109375 
              1687.64794921875 1080.4462890625 1457.770751953125 1080.4462890625 L 416.2294006347656 
              1080.4462890625 C 186.3522338867188 1080.4462890625 7.400896606668539e-07 887.84912109375 
              7.400896606668539e-07 650.2685546875 L 7.400896606668539e-07 430.1777038574219 C 
              7.400896606668539e-07 192.5970764160156 186.3522338867188 -2.817545237121521e-07 
              416.2294006347656 -2.817545237121521e-07 Z">
          </path>

          <svg className="football_field">
            <rect fill="rgba(243,243,243,1)" stroke="rgba(254,254,254,1)" strokeWidth="10px" strokeLinejoin="miter" 
              strokeLinecap="butt" strokeMiterlimit="4" shapeRendering="auto" id="football_field" rx="390.25" ry="390.25" 
              x="11%" y="5.5%" width="1460px" height="960px">
            </rect>
          </svg>
        </svg>
      </div>
    </div>
  )
}

export default Operator
