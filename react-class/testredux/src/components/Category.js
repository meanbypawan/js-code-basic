import { useEffect } from "react";
import { useSelector } from "react-redux";

function Category(){
    const {categoryList, error, isLoading} = useSelector((state)=>state.category);
    
    if(error)
      return <h1>{error}</h1>

    return<>
     {isLoading && <h1>Data is Loading</h1>}
     <ul>
        {categoryList.map((category)=><li>
            {category}
        </li>)}
     </ul>
    </>
}

export default Category;