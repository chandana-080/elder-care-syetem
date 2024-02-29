import React, { useState } from 'react'
import './Trafficlight.css'
function Trafficlight() {

    let [color,setColor]=useState("");

    let changeColor=(col)=>{
        setColor(col)
    }

  return (
    <div className='container'>
        <div className='row'>
            <div className='col-6 '>
                <button className='btn btn-danger rounded d-block mt-3 fs-4 mr-5' onClick={()=>changeColor("red")}>stop</button><br/>
                <button className='btn btn-warning rounded d-block mt-3 fs-4 ' onClick={()=>changeColor("yellow")}>Ready</button><br/>
                <button className='btn btn-success rounded d-block mt-3 fs-4 ' onClick={()=>changeColor("green")}>start</button>

            </div>
            <div className='col-6 '>
                <div className='traffic-light pt-3'>
             <p className=' bg-secondary stop-light mx-auto'></p>
             <p className=' bg-secondary ready-light mx-auto'></p>
             <p className=' bg-secondary go-light mx-auto'></p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Trafficlight