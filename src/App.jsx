import { useState } from 'react'
import val from '../src/conf/confing.js'
import './App.css'

function App() {
   console.log(val.appwriteBucketId);
  return(

    <h1>A bolg app with appwrite ${}</h1>
    // <p>value : {import.meta.env.VITE_hint}</p>
  )
}

export default App
