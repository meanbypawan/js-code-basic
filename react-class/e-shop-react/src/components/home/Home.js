import { createElement, useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCategory } from "../../redux-config/CategorySlice";
import { fetchRecentProduct } from "../../redux-config/RecentProductSlice";
import Features from "../app-features/Features";
import Carousel from "../carousel/Carousel";
import Category from "../category/Category";
import FeaturedProduct from "../featured-product/FeaturedProduct";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Navigation from "../navigation/Navigation";


function Home(){
   const dispatch  = useDispatch();
   useEffect(()=>{
     dispatch(fetchCategory());
     dispatch(fetchRecentProduct());
   },[]); 
   return <>
     <Header/>  
     <Navigation/>
     <Carousel/>
     <Features/>
     <Category/>
     <FeaturedProduct/>
     <Footer/>
    </>
}

export default Home;