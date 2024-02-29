import React, { useState } from 'react';
import './Catgame.css';

function Catgame() {


    let [on,setOn]=useState(false)
    let [bulbOn,setBulbOn]=useState("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png");
    let [catOn,setCatOn]=useState("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png");
    let [switchStatus,setSwitchStatus]=useState("switched on")
    let [mes,setMes]=useState("Switch on light to see cat")
    let switchOn=()=>{
        if(on===false){
            setOn(true);
            setBulbOn("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-on-img.png")
            setCatOn("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-img.png")
            setSwitchStatus("switched on")
            setMes("Switch off light  cat is disturbed")
        }
    }
    let switchOff=()=>{
        if(on===true){
            setOn(false);
            setBulbOn("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/bulb-go-off-img.png")
            setCatOn("https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/cat-eyes-img.png")
            setSwitchStatus("switched off")
            setMes("Switch on light to see cat");
        }
    }

  return (
    <div className='bg-dark main-container'>
        <h1 className='text-center fs-2 p-3 mes-style text-warning'>{mes}</h1>
        <div className='container'>
            <div>
                <img src={bulbOn} className="bulb-image d-block mx-auto" />
            </div>
            <div>
                <img src={catOn} className='cat-image d-block mx-auto'/>
            </div>
            
            <div className='  d-flex flex-row justify-content-center   rounded mt-3'>
                <div className='switch-board bg-secondary bg-opacity-50 p-4 mx-auto'>
                <p className='text-center mt-2 text-light fs-2' >{switchStatus}</p>
                <div>
                    <div className='d-flex flex-row justify-content-center'>
                <button className='btn btn-success switch-on fs-3' id="OnBtn" onClick={()=>switchOn()}> switch On</button>
                <button className='btn btn-danger  switch-off fs-3' id="OffBtn" onClick={()=>switchOff()}>switch off</button>
                </div>
                </div>
                </div>  
            </div>
        


        </div>

    </div>
  )
}

export default Catgame