import { useState } from "react";

import data from './data.json';
import foodData from './foodData.json'

import {
    BrowserRouter as Router,
    generatePath,
    Routes,
    Route,
    useNavigate,
    useParams,
    useLocation,
  } from "react-router-dom";

function AboutFood(props) {

  const queryParams = new URLSearchParams(window.location.search);
  const id = queryParams.get('id');

  const temp = foodData[id];

    // const handleProceed = (e) => {
    //     navigate(generatePath("/food"));
    //   };
    var d = "https://youtube.com/embed/lNdGH6irI1M";
    return (
    <div>
    <div>
      
    </div>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh',backgroundColor:'black',color:'white'}}>
      <h1>{id}</h1>
    </div>
    <div style={{display: 'flex' ,justifyContent:'center', alignItems:'center', height: '30vh',}}>
    <img width={400} height={180} src={temp["image"]} alt="BigCo Inc. logo"/>
    </div>
    <div style={{margin:'50px 20px',display: 'flex',  justifyContent:'center', alignItems:'center', height: '15vh'}}>
      <h3>{temp["desc"]}</h3>  
        </div>
    <div>
    {id=="Ginger_tea" && <iframe className='video'
      title='Youtube player'
      sandbox='allow-same-origin allow-forms allow-popups allow-scripts allow-presentation'
      src= {d}
      style={{border:'1px solid black',margin:'20px 20px',display: 'flex',  flexWrap:'wrap',justifyContent:'center', alignItems:'center', height: '40vh',borderWidth:'2px',width:'90%'}}>
      </iframe>  
    }
    
    </div>
    </div>

    );
  }
  
  export default AboutFood;
  