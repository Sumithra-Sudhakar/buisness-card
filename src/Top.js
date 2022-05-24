
import img from './profile.jpg';
import './App.css';
import React from 'react';
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"></link>
function Top(){
    return (
<div>
  <center>
      <img src={img}  className="image"/>
  <h2 className='Name'>Sumithra Sudhakar</h2>
    <h4 className='role'>FrontEnd Developer</h4>
    <button className='email'>E-mail</button>
    <button className='linkdlen' href="https://www.linkedin.com/in/sumithra-sudhakar-33b37b202/"> Linkdlen</button>
  </center>
  

</div>
    )
}
export default Top;