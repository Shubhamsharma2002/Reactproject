import { useEffect, useState } from 'react'
import val from '../src/conf/confing.js'
import './App.css'
import { useDispatch } from 'react-redux';
import authSrvice from './Service/auth.js'
import {login,logout} from "./Store/authSlice.js"

function App() {
   const[loading , setLoading] = useState(true);
   const dispatch = useDispatch();

   useEffect(() =>{
    authSrvice.getCurrentUser()
    .then((data) =>{
      if(data){
        dispatch(login({data}))
      }else{
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
   },[])
     if(loading == true){
      return(
        <p>yes ------</p>
      )
     }else{
      return(
        <p className="text-3xl font-bold text-red-500">NOOO----||||</p>
      )
     }
}

export default App
