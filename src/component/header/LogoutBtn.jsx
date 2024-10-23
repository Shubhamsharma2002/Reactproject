import React from 'react'
import { useDispatch } from 'react-redux';
import {logout} from "../../Store/authSlice"
import authSrvice from "../../Service/auth"
function LogoutBtn() {

    const dispatch = useDispatch();
    const logOutHandller = () =>{
        authSrvice.logout().then(()=>{
            dispatch(logout())
        })
    }
  return (
    <button className='inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full'>LogOut</button>
  )
}

export default LogoutBtn