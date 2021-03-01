import React,{ useEffect } from "react";
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CImg
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {getProfile} from '../actions/userProfile';
import { useDispatch, useSelector } from "react-redux";
import {logout} from '../actions/auth';
import { useHistory } from "react-router-dom";

const TheHeaderDropdown = () => {
  const history = useHistory();
  const logOutProfile = () => {
    dispatch(logout())
    history.push("/");
  }
  
 //redux implemetations
 const dispatch = useDispatch();
 const profile = useSelector((state) => state.profile)
 useEffect(() => {
   dispatch(getProfile());
}, []);
  return (
    <CDropdown
      inNav
      className="c-header-nav-items mx-2"
      direction="down"
    >
      <CDropdownToggle className="c-header-nav-link" caret={false}>
      Hello {profile.profile.name}
      &nbsp;&nbsp;
        <div className="c-avatar">
          <CImg
            src={'avatars/6.jpg'}
            className="c-avatar-img"
          />
        </div>
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end"> 
       <CDropdownItem to="/profile">
          <CIcon name="cil-user" className="mfe-2" />
         Profile
        </CDropdownItem>
        <CDropdownItem divider />
        <CDropdownItem onClick={logOutProfile}>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Logout
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default TheHeaderDropdown
