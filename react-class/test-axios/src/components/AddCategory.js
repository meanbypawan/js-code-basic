import axios from "axios";
import { useState } from "react";

function AddCategory({categories,setCategories}){
    // props: {categoryList: [{},{}], updateCategoryState: setCategories()}
    const [category,setCategory] = useState("");
    const saveCategory = async (event)=>{
      event.preventDefault();  
      try{  
       let response = await axios.post("http://localhost:3000/category/create",{categoryName: category});
       if(response.data.status){
         window.alert("Category Saved....");
         setCategories([...categories,response.data.category]);
       }
      }
      catch(err){
        console.log(err);
        window.alert("Something went wrong....");
      }
    }
    return <>
      <form onSubmit={saveCategory}>
        <div className="row mt-5 mb-5">
            <div className="col-md-5">
                <input onChange={(event)=>{setCategory(event.target.value)}} type="text" className="form-control" placeholder="Enter Category Name"/>
            </div>
            <div className="col-md-1">
              <button type="submit" className="btn btn-primary">Save</button>
            </div>
        </div>
      </form>
    </>
}

export default AddCategory;