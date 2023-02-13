import React, { useState } from 'react';
import Map from './maps';

import HelpLine from './HelpLine';
import HospitalsFinder from './maps';

const logo = require('./2.png');


function Home() {

  const [age, setAge] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();

    if (age < 18) {
      window.location.href = '/education';
    } else {
      window.location.href = '/symptoms';
    }
  };


    return (
    
    <div>

      <HelpLine/>
      {/* <HospitalsFinder/> */}
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh',backgroundColor:'black',color:'white'}}>
        <h1>MC</h1><h1 style={{fontSize: 20, lineHeight: 50}}>2</h1>
      </div>
      <p style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '4vh'}}>Menstrual Cycle Companion</p>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '25vh'}}>
        
        <form onSubmit={handleSubmit} >

          <h2 htmlFor="age">Please Enter Your Age </h2>
          <br></br>
            <input
              type="number"
              id="age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
            <br></br>
            <br></br>
          <button className="my-button" styles = {{margin:'10px 10px',display: 'flex',  justifyContent:'center', alignItems:'center'}} style={{marginLeft:'50px'}} type="submit">Submit</button>
        </form>
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '70vh'}}>
      <img width={230} height={500}  src={logo} ></img>
      </div>
    </div>
    );
  }
  
  export default Home;
  