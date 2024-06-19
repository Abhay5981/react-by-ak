import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [counter, setCounter] = useState(5)

  const addValue = ()=> {
   if(counter<20){
    setCounter(counter+1)  
   }else{
    setCounter(counter)
   }
    
    
    
}
 const removeValue = ()=>{
  if(counter>0){
    setCounter(counter-1) 
  }else{
    setCounter(counter)
  }
  
  }

  return (
    <>
  <h1>Coffee aur React </h1>
  <h2>Counter value:{counter}</h2>
  <button onClick={addValue}>Add Value{counter}</button> 
  <br />
  <button onClick={removeValue}>Remove Value {counter}</button>
    </>
  )
}

export default App
