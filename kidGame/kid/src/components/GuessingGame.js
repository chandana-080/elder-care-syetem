import React ,{useEffect,useRef,useState }from 'react'
import './GuessingGame.css'

function GuessingGame() {
    const defuserInputRef = useRef(null);
    let [randomNumber,setRandomNumber]=useState(Math.ceil(Math.random()*100));
    let [result,setResult]=useState("")
   

    useEffect(() => {
        // Generate a new random number on page refresh
        setRandomNumber(Math.ceil(Math.random() * 100));
      }, []);
    

    let checkGuess=()=>{
        let guessedNumber=parseInt(defuserInputRef.current.value)
        if (isNaN(guessedNumber)) {
            setResult('Please enter a valid input.');
          } else if (guessedNumber < randomNumber) {
            setResult('Too Low! Try Again.');
          } else if (guessedNumber > randomNumber) {
            setResult('Too High! Try Again.');
          } else {
            setResult("congratulations You got it right.")
        }
    }


    
  return (

    <div className='container'>
        
        <div class="row ">
            <div className='col-12 col-md-7 m-auto justify-content-center  p-3'>
        <img className='game-image d-block mx-auto' src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/guess-game-img.png"/>
        <p className='text-center text-success fs-3'>Find out the right number between 1 to 100</p>
        </div>
        </div>
        <div className='row mt-5 '>
              <div className='col-12 col-sm-7 m-auto '>
                <p className=' fs-1 text-info text-center'>Guess the Number <img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/guess-number-img.png" className='guess-number-image'/></p>
                <input className='form-control w-75 m-auto' ref={defuserInputRef}/>
                <button className='btn btn-success d-block mx-auto mt-4 fs-3' onClick={()=>checkGuess()}>check</button>
               
                <p className='text-white bg-info fs-2 text-center rounded mt-3 fw-bold'>{result}</p>

              </div>
        </div>

    </div>
  )
}

export default GuessingGame