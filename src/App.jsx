import { useState } from 'react'
import val from '../src/conf/confing.js'
import './App.css'
import { useDispatch } from 'react-redux';
import authSrvice from './Service/auth.js'

function App() {
   const[loading , setLoading] = useState(true);
   const dispatch = useDispatch();
  return(

    <h1>A bolg app with appwrite ${val.appwriteBucketId}</h1>
    // <p>value : {import.meta.env.VITE_hint}</p>
  )
}

export default App
