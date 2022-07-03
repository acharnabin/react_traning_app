import React from 'react'
import {  useParams } from 'react-router-dom';
const Product = () => {
    // const params=useParams()
    const {id}=useParams()

    console.log(id)
  return (
    <h1>Product-{id}</h1>
  )
}

export default Product