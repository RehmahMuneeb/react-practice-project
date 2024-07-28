import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';  
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';  

function Topbtn() {
    const[topbtn,settopbtn]=useState(false);
    useEffect(()=>{
window.addEventListener("scroll",()=>{
    if(window.scrollY > 100){
settopbtn(true);
    }else{
        settopbtn(false);
    }
})
    },[])
    const scrollup=()=>{
        window.scrollTo({
            top:0,
            behavior:"smooth"
        })
    }
  return (
    <div className=''>
      {Topbtn && (
        <button className='' style={{position:'fixed',
    
            bottom:'50px',
            right:'50px',
            height:'50px',
            width:'50px',
            fontSize:'50px',
            color:'black',
            background:'#ffff',
            borderRadius:'50%',
            cursor:'pointer',
            border:'none',
            transition: 'background 0.3s, border-color 0.3s',  
            display: 'flex',   
            alignItems: 'center', 
            justifyContent: 'center',  
            padding: '0',
        }} onClick={scrollup}>  <FontAwesomeIcon icon={faArrowUp} style={{ fontSize: '24px' }} /> </button>
      )}
    </div>
  )
}

export default Topbtn
