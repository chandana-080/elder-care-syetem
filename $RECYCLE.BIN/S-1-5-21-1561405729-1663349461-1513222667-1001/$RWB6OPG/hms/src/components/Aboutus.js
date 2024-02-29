import React from 'react'
import { FaBiking ,FaDollarSign } from "react-icons/fa";
import { RiCustomerServiceFill } from "react-icons/ri";
import { AiOutlineStar } from "react-icons/ai";
import { BsFillStarFill } from "react-icons/bs";
import './Aboutus.css'

function Aboutus() {
  return (
    <div className=' aboutus-background '>
    <div className='container '>

    {/*Coursel*/}

    <p className='text-white text-center fs-1 pt-2 main-heading-aboutus'>Why choose us?</p>
      
      <div className='row d-flex flex-row justify-content-between'>
        <div className='col-sm-4'>
          <div className='aboutus-image'>
            <img src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8NHx8fGVufDB8fHx8fA%3D%3D&w=1000&q=80" width="100%" />
            </div>
            </div>
          <div className='col-sm-7 border-success border-light'>
          <blockquote className="blockquote blockquote-reverse">
          
            <p className='text-white fs-4'><span className='fs-3  text-dark'>Best Food In The Country</span> Owning a restaurant is perhaps the most lucrative option these days. Why shouldn’t it be? After all who doesn’t love to cook and eat? Sometimes cooking is something very mundane that we do at home. But turning it into a passionate income-earning career is something people don’t consider quite often.
               But in reality, owning a restaurant is an exciting experience. Yes, there’s a lot of work to do such as managing finance, maintaining food quality and marketing your restaurant. However, all that work becomes really fun if you give your heart to it.
            </p>
            <div className='d-flex flex-row justify-content-around'>
              <p className='p-3 bg-white bg-opacity-50 rounded '><FaBiking className='free-delivery-icon '/>Free Delivery</p>
              <p className='p-3 bg-white bg-opacity-50 rounded '><RiCustomerServiceFill className='service-icon'/> 24/7 service</p>
              <p className='p-3 bg-white bg-opacity-50 rounded '><FaDollarSign className='payment-icon'/>Easy Payments</p>
            </div>
            </blockquote>
            </div>
      </div>
    {/*customer reviews */}
    <p className='text-success fs-1 mt-2'>what customer says</p>
    <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 mt-4 '>
      <div className='card bg-success bg-opacity-25'>
        <div className='card-body '>
          <div className='d-flex flex-row'>
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4CcN-fU7UiIOtgWGYp1ioU1fMBEUn9qMuUA&usqp=CAU" className='rounded-circle' width="80px" height="80px"/>
            <p className='fw-bold fs-4'>John</p>
          </div>
          <div className=''>
          <BsFillStarFill className='customer-review-star text-success  bg-opacity-25'/> 
          <BsFillStarFill className='customer-review-star text-success'/> 
          <BsFillStarFill className='customer-review-star text-success'/> 
          <AiOutlineStar className='customer-review-star'/>
          <AiOutlineStar className='customer-review-star'/>
          </div>
          </div> 
          <p className='text-secondary fs-5'>Discuss what you like or dislike about the story. Give reasons to support your opinion. You may want to compare and contrast the story with other stories you have read by the same author or in the same genre. You can also compare the story to your own personal experience or a current event in the news.</p>


        </div>

      </div>
    </div>



    </div>
    </div>
  )
}

export default Aboutus