import React, { useState } from 'react';
import Food from './food';


const logo = require('./Landing.jpg');

const SelectOptions = ({ onSubmit }) => {
  const [selectedOptions, setSelectedOptions] = useState([]);

  const handleOptionChange = (event) => {
    const options = Array.from(event.target.selectedOptions, (item) => item.value);
    setSelectedOptions(options);
  };

  const handleSubmit = () => {
    onSubmit(selectedOptions);
  };


  const k = ['1','2','3','4'];


  return (
    <div>
      <select class="dropdown" multiple onChange={handleOptionChange}>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <br></br>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

let selectedOptions = " ";

const Symptoms = () => {
//   const [selectedOptions, setSelectedOptions] = useState([]);

    const [selectedOptions, setSelectedOptions] = useState([]);
    const handleOptionChange = (event) => {
        const options = Array.from(event.target.selectedOptions, (item) => item.value);
        setSelectedOptions(options);
        selectedOptions = selectedOptions + toString(options);
    };
  
  const l = '/food?id='+ selectedOptions


  

  return (
  <div>
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '10vh',backgroundColor:'black',color:'white'}}>
      <h2 >Please Select the Symptoms</h2>
    </div>
    <div className="image-checklist" style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '40vh'}}>
        <div   className="image-checklist-item">
        <select class="dropdown" multiple onChange={handleOptionChange}>
        <option value="Backpain">1. Back pain</option>
        <option value="Cramps">2. Cramps</option>
        <option value="Bloating">3. Bloating</option>
        <option value="Headache">4. Headache</option>
        <option value="Fatigue">5. Fatigue</option>
        <option value="Tenderness">6. Breast Tenderness</option>
        <option value="Nausea">7. Nausea</option>
        <option value="Acne">8. Period Acne</option>
        </select>
        </div>
    </div>

    
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '8vh'}}>
        <img width={480} height={500}  src={logo} ></img>
      </div>
      <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '60vh'}}>
      <a className="my-button" href={l}>Click Me ---></a>
    </div>
      
    </div>
  );
};

export default Symptoms
