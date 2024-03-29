import axios from "axios";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { addItemInToCart, updateCartItems } from "../../redux-config/CartSlice";
import apiEndPoint from "../../WebApi/api";
import Header from "../header/Header";
import Navigation from "../navigation/Navigation";
import Spinner from "../spinner/Spinner";

function Shop() {
  const [productList,setProductList] = useState([]);
  const [page,setPage] = useState(1);
  const [error, setError] = useState("");
  const [isLoading,setIsLoading]= useState(true);
  const {currentUser} = useSelector(state=>state.user);
  const {cartItems,cartError} = useSelector(state=>state.cart);
  const dispatch = useDispatch();
  const loadProducts = async()=>{
     try{
      let response = await axios.get(apiEndPoint.PRODUCT_LIST+`?page=${page}`);
      if(response.data.status){
        setProductList([...productList, ...response.data.products]);
        setPage(page+1);
        setIsLoading(false);  
      }  
     }
    catch(err){
       setError("Oops! something went wrong..");
    }
  }
  const addToCart = (product)=>{
    if(!currentUser)
      toast.warning("please login to perform this action");
    else{
      let status = true;
       if(cartItems.length!=0)      
        status = cartItems.some((item)=>item.productId._id == product._id);
      else
        status = false;
      if(status)
       toast.info("Item is already added in cart");
      else{
          dispatch(addItemInToCart({userId: currentUser._id, productId:product._id}));
          if(!cartError){
            dispatch(updateCartItems(product));
            toast.success("Item successfully added in cart");
          }
          else
            toast.error("Oops! something went wrong..");
      }   
    } 
  }
  useEffect(()=>{
    loadProducts();
  },[]);
  return <>
    <Header />
    <Navigation />
    <ToastContainer/>
    <div className="container-fluid pt-5 pb-3">
      <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4">
        <span className="bg-secondary pr-3">Recent Products</span>
      </h2>
      {isLoading && <Spinner/>}
      <InfiniteScroll 
        dataLength={productList.length}
        next={loadProducts}
        hasMore={productList.length<100}
        loader={<Spinner/>}
        endMessage={<p>Data End...</p>}>
          
      <div className="row px-xl-5"  style={{overflow: "hidden"}}>
      
      {!error && productList.map((product,index)=> <div key={index} className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="product-item bg-light mb-4">
          <div className="product-img position-relative overflow-hidden">
            <img className="img-fluid w-100" style={{height:"200px"}} src={product.thumbnail} alt="" />
            <div className="product-action">
              <a onClick={()=>addToCart(product)} className="btn btn-outline-dark btn-square">
                <i className="fa fa-shopping-cart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="far fa-heart" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-sync-alt" />
              </a>
              <a className="btn btn-outline-dark btn-square" href="">
                <i className="fa fa-search" />
              </a>
            </div>
          </div>
          <div className="text-center py-4">
            <a className="h6 text-decoration-none text-truncate" href="">
              {product.title}
            </a>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <h5>{"Rs."+(product.price-(product.price*product.discountPercentage)/100).toFixed(1)}</h5>
              <h6 className="text-muted ml-2">
                <del>{product.price}</del>
              </h6>
            </div>
            <div className="d-flex align-items-center justify-content-center mb-1">
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small className="fa fa-star text-primary mr-1" />
              <small>(99)</small>
            </div>
            <Link style={{color: 'black', fontStyle: 'bold', textDecoration: 'none'}}>View Description</Link>
          </div>
        </div>
      </div>)} 
      
      </div>
      </InfiniteScroll>
    </div>
  </>
}

export default Shop;