import { useSelector } from "react-redux";

function Category(){
    const{categoryList,isLoading,error} =  useSelector((state)=>state.category);
    return <>
    <div className="container-fluid pt-5">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
      <span className="bg-secondary pr-3">Categories</span>
    </h2>
    <div className="row px-xl-5 pb-3">
     {!error&& categoryList.map((category,index)=><div key={index} className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <a className="text-decoration-none" href="">
          <div className="cat-item d-flex align-items-center mb-4">
            <div
              className="overflow-hidden"
              style={{ width: 100, height: 100 }}
            >
              <img className="img-fluid" src="img/cat-1.jpg" alt="" />
            </div>
            <div className="flex-fill pl-3">
              <h6>{category.categoryName.toUpperCase()}</h6>
            </div>
          </div>
        </a>
      </div>)}
    </div>
  </div>
    </>
}

export default Category;