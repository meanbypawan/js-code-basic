import axios from "axios";
import { useContext, useEffect, useState } from "react";
import MasterContext from "../context/MasterContext";
import Loader from "./Loader";

function Product(){
   const {productList}  = useContext(MasterContext); 
  

   return <>
       <h3>Product List</h3>
       {productList.length==0 && <Loader/>}
       <table className="table">
           <thead>
              <tr>
                <th>S.no</th>
                <th>Title</th>
                <th>Image</th>
                <th>Brand</th>
                <th>Edit</th>
                <th>Delete</th>
              </tr>
           </thead>
           <tbody>
            {productList.map((product,index)=><tr key={index}>
                <td>{index}</td>
                <td>{product.title}</td>
                <td>
                    <img src={product.thumbnail} style={{width:'100px' ,height:'100px', borderRadius:'50%'}}/>
                </td>
                <td>{product.brand}</td>
                <td>
                    <button className="btn btn-outline-primary">Edit</button>
                </td>
                <td>
                    <button className="btn btn-outline-danger">Delete</button>
                </td>
            </tr>)}
           </tbody>
       </table>
      <hr/>
   </>
}

export default Product;