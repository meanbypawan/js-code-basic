import { useEffect, useState } from "react";
import axios from "axios";
import AddCategory from "./AddCategory";
function Category(){
  const [categories, setCategories] = useState([]);
  
  const loadCategories = async()=>{
    try{ 
        let response = await axios.get("http://localhost:3000/category/list");
        if(response.data.status)
          setCategories(response.data.categories);
       }
       catch(err){
         console.log("Catech executed/ Netwrok Error");
       }
  }
  useEffect(()=>{
     loadCategories();
  });
  return <div>
    <hr/>
    <AddCategory/>
    <h1>Categories List</h1>
    
    <table className="table">
        <thead>
            <tr>
                <th>S.no</th>
                <th>Category name</th>
                <th>Edit</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {categories.map((category,index)=><tr>
                <td>{index+1}</td>
                <td>{category.categoryName}</td>
                <td><button className="btn btn-outline-primary">Edit</button></td>
                <td><button className="btn btn-outline-danger">Delete</button></td>
            </tr>)}
        </tbody>
    </table>
  </div>
}

export default Category;