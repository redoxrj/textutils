// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';

import React from "react";
import {
  BrowserRouter,
  Routes,
  Route
  
} from "react-router-dom";


// let name='HeroLal'

function App() {
  const[mode,setMode]= useState('light')
  const[modeTextClass,setModeTextClass]= useState('text-black')
  const[modeText,setModeText]= useState('Enable Dark Mode')
  const[alert,setAlert]= useState(null)
  const showAlert =(type,message)=>{
    setAlert({
      type:type,
      msg:message
    })
    setTimeout(() => {
      setAlert(null)
      
    }, 1500);

  }

  const toggleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      setModeTextClass('text-white')
      setModeText('Enable Light Mode')
      document.body.style.backgroundColor='#252f3e'
      showAlert('success','Dark Mode has been Enabled')
    }
    else{
      setMode('light')
      setModeTextClass('text-black')
      setModeText('Enable Dark Mode')
      document.body.style.backgroundColor='white'
      showAlert('success','Light Mode has been Enabled')

    }
  }
  
  return (
    <>
     <BrowserRouter>

    {/* yha props pass kiya */}
    <Navbar title="TextUtils" about='About us' mode={mode} toggleMode={toggleMode} modeTextClass={modeTextClass} modeText={modeText}/> 
    {/* <Navbar/> */}
    <Alert alert={alert} />
    <Routes>
        <Route  exact path="/" element={<TextForm heading="Enter the text to Analyze" mode={mode} showAlert={showAlert}/>} />
        <Route exact path="/about" element={<About  mode={mode}/>} />
      </Routes>

    {/* <About/> */}



    
    
    

    </BrowserRouter>
    </>

   
  );
}

export default App;
