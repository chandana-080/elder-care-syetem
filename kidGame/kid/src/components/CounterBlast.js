import React, { useState, useEffect, useRef } from 'react';
import './CounterBlast.css';

function CounterBlast() {
  const [counter, setCounter] = useState(10);
  const defuserInputRef = useRef(null);
  let [bombStatus,setBombStatus]=useState(false)
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCounter((prevCounter) => prevCounter - 1);
    }, 1000);

    // Cleanup the interval when component unmounts or when counter reaches 0
    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter' && defuserInputRef.current.value === 'defuse' && counter > 0) {
        console.log('Defused!');
        
        clearInterval(intervalId);
      }
    };

    const intervalId = setInterval(() => {
      if (counter <= -1 ) {
        clearInterval(intervalId);
        setBombStatus(true)
      }
    }, 1000);

    // Attach event listener when component mounts
    defuserInputRef.current.addEventListener('keydown', handleKeyDown);

    // Cleanup the event listener when component unmounts
    return () => {
      defuserInputRef.current.removeEventListener('keydown', handleKeyDown);
      clearInterval(intervalId);
    };
  }, [counter]);

  return (
    <div className='bg-info'>
      <p className='text-center text-light fs-1 pt-5 message-style'>Enter defuse to stop blast</p>
      <div className='main-container'>
        <input type='text' className=' form-control w-25 mx-auto' id='defuser' ref={defuserInputRef} />
        <br />
        {bombStatus===false?
        <img src='https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/time-bomb-img.png' className='bomb-image mt-4 d-block mx-auto' />
:<img src='https://w7.pngwing.com/pngs/607/383/png-transparent-bomb-cartoon-bomb-cartoon-cartoon-character-vertebrate-happy-birthday-vector-images.png' className='bomb-image mt-4 d-block mx-auto' />}
        {(counter <= 0 ) ? (
  <h1 className='counter-style text-center text-danger mt-3'>Boom!</h1>
) : (counter>0 && defuserInputRef.current?.value === 'defuse')?<h1 className='counter-style text-center text-success mt-3'>YOU DID IT!</h1>:(
  <h1 className='counter-style text-center text-light mt-3'>{counter}</h1>
)}

      </div>
    </div>
  );
}

export default CounterBlast;
