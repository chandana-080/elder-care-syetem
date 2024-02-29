import React ,{useEffect,useState}from 'react'
import './Menu.css'
import axios from 'axios'

function Menu() {                  
let [dessertItem,setDessertItem]=useState([])
let [mocktailItem,setMocktailItem]=useState([])
let [biryaniItem,setBiryani]=useState([])
let [nonvegStarterItem,setNonvegStarterItem]=useState([])
let [vegStarterItem,setVegStarterItem]=useState([])
let [soupItem,setSoupItem]=useState([])


let tempbiryaniItem=[]
let tempdessertItem=[]
let tempmocktailItem=[]
let tempnonvegStarterItem=[]
let tempvegStarterItem=[]
let tempsoupItem=[]

let [err,setErr]=useState("")

let addToCart=function(foodObj){
  foodObj.quantity=1;
  axios.post("http://localhost:3500/cart-api/add-item",foodObj).then(response=>{
    if(response.status===201){
     console.log(response)
     }
     
}).catch(err=>{

})
}


let getUser=()=>{
  axios.get("http://localhost:3500/food-api/get-food").then(response=>{
    
      if(response.status===201){
          console.log(response.data.payload)
          
        for(let item of response.data.payload){
          if(item.foodtype==="biryani"){
            tempbiryaniItem.push(item)
            console.log(item);
          }
          else if(item.foodtype==="non-veg-starters"){
            console.log(item);
            tempnonvegStarterItem.push(item)
          }
          else if(item.foodtype==="veg-starters"){
            console.log(item);
            tempvegStarterItem.push(item)
          }
          else if(item.foodtype==="desserts"){
            console.log(item);
            tempdessertItem.push(item)
          }
          else if(item.foodtype==="mock-tails"){
            console.log(item);
            tempmocktailItem.push(item)
          }
          else if(item.foodtype==="soups"){
            console.log(item);
            tempsoupItem.push(item)
          }
          
          
        }


        setBiryani(tempbiryaniItem)
        setDessertItem(tempdessertItem)
        setMocktailItem(tempmocktailItem)
        setNonvegStarterItem(tempnonvegStarterItem)
        setSoupItem(tempsoupItem)
        setVegStarterItem(tempvegStarterItem)
        
      }
  }).catch(err=>{
      setErr(err.message)
  })
}

useEffect(()=>{
      getUser();
},[])



  return (
    <div className='container'>
       <p className='text-success fs-1 mt-3 '>Starters</p>
       <p className='text-warning fs-3 mt-3 '> Non-veg Starters</p>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4'>
      {nonvegStarterItem.map(foodObj=><div className='col' key={foodObj.id}>
        <div className='card shadow mt-5'>
        <img className="menu-item d-block mx-auto w-100" src={foodObj.image} />
          <div className='card-body'>
          
            <p className='text-secondary fs-3 text-center'>{foodObj.foodname}</p>
            <p className='text-secondary fs-3 text-center'>{foodObj.foodcost}</p>
            <button className='btn btn-success' onClick={() => addToCart(foodObj)}>add to cart</button>

          </div>
        </div>
        
      </div>)}
  </div>


      <p className='text-warning fs-3 mt-3 '>veg Starters</p>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-3'> 
      {vegStarterItem.map(foodObj=><div className='col' key={foodObj.id}>
        <div className='card shadow mt-5'>
        <img className="menu-item d-block mx-auto w-100" src={foodObj.image} />
          <div className='card-body'>
          
            <p className='text-secondary fs-3 text-center'>{foodObj.foodname}</p>
            <p className='text-secondary fs-3 text-center'>{foodObj.foodcost}</p>
            <button className='btn btn-success' onClick={() => addToCart(foodObj)}>add to cart</button>

          </div>
        </div>
        
      </div>)}
        </div>


      <p className='text-warning fs-3 mt-3 '> soups</p>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-3'>
      
      {soupItem.map(foodObj=><div className='col' key={foodObj.id}>
        <div className='card shadow mt-5'>
        <img className="menu-item d-block mx-auto w-100" src={foodObj.image} />
          <div className='card-body'>
          
            <p className='text-secondary fs-3 text-center'>{foodObj.foodname}</p>
            <p className='text-secondary fs-3 text-center'>{foodObj.foodcost}</p>
            <button className='btn btn-success' onClick={() => addToCart(foodObj)}>add to cart</button>

          </div>
        </div>
        
      </div>)}
        

      </div>
      <p className='text-warning fs-3 mt-2 '> Biryani</p>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-3'>
      
      {biryaniItem.map(foodObj=><div className='col'key={foodObj.id}>
        <div className='card shadow mt-5'>
        <img className="menu-item d-block mx-auto w-100" src={foodObj.image} />
          <div className='card-body'>
          
            <p className='text-secondary fs-3 text-center'>{foodObj.foodname}</p>
            <p className='text-secondary fs-3 text-center'>{foodObj.foodcost}</p>
            <button className='btn btn-success' onClick={() => addToCart(foodObj)}>add to cart</button>

          </div>
        </div>
        
      </div>)}
        

      </div>
      <p className='text-warning fs-3 mt-3 '> Desserts</p>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-3'>
      
      {dessertItem.map(foodObj=><div className='col'key={foodObj.id}>
        <div className='card shadow mt-5'>
        <img className="menu-item d-block mx-auto w-100" src={foodObj.image} />
          <div className='card-body'>
          
            <p className='text-secondary fs-3 text-center'>{foodObj.foodname}</p>
            <p className='text-secondary fs-3 text-center'>{foodObj.foodcost}</p>
            <button className='btn btn-success' onClick={() => addToCart(foodObj)}>add to cart</button>

          </div>
        </div>
        
      </div>)}
        

      </div>
      <p className='text-warning fs-3 mt-3'>Mock Tails</p>
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 mt-3'>
      
      {mocktailItem.map(foodObj=><div className='col'key={foodObj.id}>
        <div className='card shadow mt-5'>
        <img className="menu-item d-block mx-auto w-100" src={foodObj.image} />
          <div className='card-body'>
          
            <p className='text-secondary fs-3 text-center'>{foodObj.foodname}</p>
            <p className='text-secondary fs-3 text-center'>{foodObj.foodcost}</p>
            <button className='btn btn-success' onClick={() => addToCart(foodObj)}>add to cart</button>

          </div>
        </div>
        
      </div>)}
        

      </div>


      </div>
  )
}

export default Menu 