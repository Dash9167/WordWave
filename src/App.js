
import './App.css';
import Navigation from './components/navigation';
import Textform from './components/textform';
import React, {  useState } from 'react';

function App() {
  const [mode,setmode]=useState('Dark');
  const togglemode=()=>{
    if(mode ==='Light'){
    setmode('Dark')
  }
  else{
    setmode('Light')
  }
}
  return (
   
    <><Navigation statusmode={mode} togglemode={togglemode}/>
    <Textform text="Enter your text here" /></>
  );
}

export default App;
