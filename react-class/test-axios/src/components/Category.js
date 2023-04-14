import { useContext, useEffect, useState } from "react";
import axios from "axios";
import AddCategory from "./AddCategory";
import Loader from "./Loader";
import MasterContext from "../context/MasterContext";
function Category() {
  const {categories} = useContext(MasterContext);

  const deleteCategory = async (categoryId,index) => {
    try {
      if (window.confirm('Are you sure ?')) {
        let response = await axios.post("http://localhost:3000/category/delete", { categoryId });
        if (response.data.status){
          window.alert("Catgegory Delete...");
          categories.splice(index,1);
          //setCategories([...categories]);
        }
      }
    }
    catch (err) {
      window.alert("Oops! something wrong...");
    }

  }
  return <div>
    <hr />
    <AddCategory categories={categories}/>
    {categories.length==0 && <Loader/>}
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
        {categories.map((category, index) => <tr id={"row"+index} key={index}>
          <td>{index + 1}</td>
          <td>{category.categoryName}</td>
          <td><button className="btn btn-outline-primary">Edit</button></td>
          <td><button onClick={() => deleteCategory(category._id,index)} className="btn btn-outline-danger">Delete</button></td>
        </tr>)}
      </tbody>
    </table>
  </div>
}

export default Category;