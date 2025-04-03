import React,{useState,useEffect} from 'react'
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_URL;
import "./ProductDetails.css"
import { useDispatch } from 'react-redux';

import {addToCart} from "../../ReduxSlicer/ProductSlicer"


export default function ProductGrid() {
  let dispatch = useDispatch()
    let [ProductData,setProductData] = useState();
    let [CtegoriesData,setCtegoriesData] = useState([]);
    let [isLoading,setLoading] = useState(true);
    useEffect(()=>{
        axios.get(`${API_BASE_URL}`)
       .then(res=>{
           setProductData(res.data)
           let c = res.data.map((e)=>e.category.name)
           let uniqueCtegories = [...new Set(c)]
           setCtegoriesData(uniqueCtegories)      
           console.log(uniqueCtegories);  
       })
       .catch(err=>console.log(err))
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
            <div>
              <section>
                <h2>Categories</h2>

                  {CtegoriesData?.map((category,index)=>(
                   <button className='bg-blue-300 py-2 rounded rounded-4xl px-5 m-3' >{category}</button>
                  ))}

              </section>

          {
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
      }
    
    </div>

  )
}
