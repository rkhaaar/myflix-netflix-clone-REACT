import React from 'react';
import './Header.css';

export default ({black})=>{
  return (
    <header className={black ? 'black' : ''}>  
      <div className='header--logo'>
        <a href='/'>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwiwsUdE7mbB28QoiGY0rLZica9Nlo5wtzl2hCSmnhnP0Rozdo3jHy3Cr4f0R4co_p2ZM&usqp=CAU"></img>
      </a>
      </div>
      <div className='header--user'>
        <a href='/'>
      <img src="https://i.pinimg.com/originals/ab/d7/a4/abd7a42750a2268fbd1088994e623ade.gif"></img>
      </a>
      </div>
    </header>
  )
}