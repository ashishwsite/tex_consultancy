import React from 'react'
import './FormStyle.css'
const Form = () => {
  return (
    <div style={{display:'flex', flexDirection:'column',justifyContent:'center', gap:'5px'}}>
        <h3>Get a free Consultation</h3>
        <h2 >Talk to an Advisor Now</h2>
        <div>
           <h6>Name</h6>
           <input type='text'></input>
           <h6>Phone Number</h6>
           <input type='text'></input>
           <h6>Email</h6>
           <input type='email'></input>
           <h6>state</h6>
           <input type='text'></input>
           <a><button style={{border:'solid 3px',borderRadius:'4px',background:'yellowgreen',marginLeft:'7px'}}>Get Started</button></a>
        </div>
      
    </div>
  )
}

export default Form
