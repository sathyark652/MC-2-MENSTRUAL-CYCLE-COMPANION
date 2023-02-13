import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import data from './data.json';
import foodData from './foodData.json'


const logo = require('./arrow.png');
function Food(props) {

    const [temp, setTemp] = useState(0);

    var tempData  = data['']

    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get('id');
    const arr = id.split(',');

    var newArr = [];
    arr.map((e) => {
        newArr.push(data[e]["Food"]);
    });

    newArr = [].concat.apply([], newArr);

    var l;

    var exer = '/exercise?id=' + arr;

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh', backgroundColor: 'black', color: 'white' }}>
                <h1>Treatment List</h1>
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', height: '20vh', borderWidth: '2px' }}>
                {newArr.map((e) => {
                    l = '/aboutfood?id=' + e.name;
                    return (
                        <div style={{ display: 'inline-block', border: '1px solid black', margin: '10px 10px', padding: '10px 10px', width: '90%' }}>
                            <img style={{ width: '100%', float: 'left' }} src={foodData[e.name]["image"]} />
                            <h1>{e.name}</h1><a style={{ display: 'inline-block', float: 'right' }} href={l}>
      
                            <img style={{ width: '10%', float: 'right' }} src={logo} ></img></a>      
                        </div>
                            
                    );
                })}
                <div style={{display: 'inline-block',  justifyContent:'center', alignItems:'center'}}>
                <a className="my-button" href={exer} style={{marginLeft:'110px'}}>Go to Exercise ---></a>
                <br/><br></br>
                {/* <a className="my-button" href='/maps'>Go to Doctor Info.</a> */}
                </div>
            </div>
        </div>
    );
}

export default Food;