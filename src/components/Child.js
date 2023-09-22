import React from 'react'

function Child() {
    const hide=()=>{
        document.querySelector(".learn").style.display="none";
       
    }
    const hide1=()=>{
       
        document.querySelector(".build").style.display="none";
        
    }
    const hide2=()=>{
       
        document.querySelector(".deploy").style.display="none";
    }
  return (
    <div>
      <h2>Child Componet </h2>
      <ul>
        <li>learn React <button className='learn' onClick={hide}>Complete</button></li>
        <li>Build a React app <button className='build' onClick={hide1}>Complete</button></li>
        <li> Deploy the React app <button className='deploy' onClick={hide2}>Complete</button></li>
      </ul>
    </div>
  )
}

export default Child
