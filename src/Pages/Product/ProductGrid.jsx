import React,{useState,useEffect} from 'react'
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_URL;
import "./ProductDetails.css"
import { useDispatch } from 'react-redux';
import {addToCart} from "../../ReduxSlicer/ProductSlicer"


export default function ProductGrid() {
  let dispatch = useDispatch()
    let [ProductData,setProductData] = useState();
    let [isLoading,setLoading] = useState(true);
    useEffect(()=>{
        axios.get(`${API_BASE_URL}`)
       .then(res=>setProductData(res.data))
       .catch(err=>console.log(err))
       console.log(ProductData)
       setLoading(false)
    },[])

  return (
    <div id = "ProductGrid">
        {
          isLoading? <div>
            <center>
              <div className="spinner-border text-primary" role="status">
                <span className="sr-only">Loading...</span>
              </div>
            </center>
          </div>:
          ProductData?.map(product=>(
            <div className='ProductCard'  key={product.id}>
                <img src={product.images[0]} alt={product.name} />
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
                <div className="Btns">
                <button onClick={()=>{
                  dispatch(addToCart(product))
                }} >Add To Cart</button>
                <button>Buy Now</button>
                </div>
            </div>
        ))
        }
    </div>
  )
}
