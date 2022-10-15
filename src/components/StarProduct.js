import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/StarProduct.css"

const StarProduct = ({starProduct}) => {
  return (
    <div className="starProduct">
      <div> <Link to={starProduct[0].url}> <img src={starProduct[0].image} alt="1st Product" /></Link></div>
         <div>
         <Link to={starProduct[1].url}> <img src={starProduct[1].image} alt="1st Product" /></Link>
         <Link to={starProduct[2].url}> <img src={starProduct[2].image} alt="1st Product" /></Link>
         <Link to={starProduct[3].url}> <img src={starProduct[3].image} alt="1st Product" /></Link>
         </div>
    </div>
  )
}

export default StarProduct
