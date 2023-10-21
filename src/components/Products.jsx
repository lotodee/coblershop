import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { popularProducts } from '../data'
import CartItem from '../pages/CartItem'
import Product from './Product'
import { useCart } from "react-use-cart";
import axios from "axios"
import {products} from "../data.js"
const Container = styled.div`
display:flex;
padding:20px;
flex-wrap: wrap;
border:2px solid yellow;

`
const Space = styled.div`

border:2px solid red;
height:100px;
width:100px;

`
const Products = ({ cat, filters, sort }) => {

//   const [products, setProducts] = useState([]);
//   const [filteredProducts, setFilteredProducts] = useState([]);
//   console.log("products")
//   useEffect(() => {
//     const getProducts = async () => {
//       try {
//         const res = await axios.get(
//           cat
//             ? `http://localhost:5000/api/products?category=${cat}`
//             : "http://localhost:5000/api/products"
//         );
     
//         setProducts(res.data && res.data.length>0 ? res.data : [])  ;
//       } catch (err) {}
//     };
//     getProducts();
//   }, [cat]);
// console.log(products+"Ff")
//   useEffect(() => {
//     cat &&
//       setFilteredProducts(
//         products.filter((item) => {
//           return Object.entries(filters).every(([key, value]) => {
//             // Use .toLowerCase() to make the comparison case-insensitive if needed
//             return item[key].toLowerCase().includes(value.toLowerCase());
//           });
//         })
//       );
//   }, [products, filters, cat]);
  
  return (
    <Container>
      {products.map(item=>{
    return(
      <>
            <Product item={item} key={item.id} />
           
       </>
    )
      })}

    </Container>
  )
}

export default Products
