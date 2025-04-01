import React,{useState,useEffect} from 'react'
import axios from 'axios';
const API_BASE_URL = import.meta.env.VITE_API_URL;


export default function ProductGrid() {
    let [ProductData,setProductData] = useState();
    useEffect(()=>{
        axios.get(`${API_BASE_URL}`)
       .then(res=>setProductData(res.data))
       .catch(err=>console.log(err))
       console.log(ProductData)
    },[])

  return (
    <div>
        {ProductData?.map(product=>(
            <div key={product.id}>
                <h3>{product.name}</h3>
                <p>{product.description}</p>
                <img src={product.images[0]} alt={product.name} />
            </div>
        ))}
    </div>
  )
}
