import logo from './logo.svg';
import './App.css';
import { Component, useEffect, useState } from 'react';
import SideBar from './components/SideBar';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Category from './components/Category';
import Product from './components/Product';
import MasterContext from './context/MasterContext';
import axios from 'axios';

function App(){
  const [categories, setCategories] = useState([]);
  const [productList, setProductList] = useState([]);

  const loadCategories = async () => {
    try {
      let response = await axios.get("http://localhost:3000/category/list");
      if (response.data.status)
        setCategories(response.data.categories);
    }
    catch (err) {
      console.log("Catech executed/ Netwrok Error");
    }
  }
  const loadProducts = async()=>{
    try{ 
     let response = await axios.get("http://localhost:3000/product/list");
     if(response.data.status)
       setProductList(response.data.products);
    }
    catch(err){
      window.alert("Something is wrong...");
    }
  }  
  useEffect(()=>{
    loadProducts();
    loadCategories();
  },[])
  return <div>
   <MasterContext.Provider value={{categories:categories,productList: productList}}> 
    <SideBar/>
    <div class="container-fluid">
      <main class="tm-main">
        <SearchBar/>
        <Routes>
           <Route path="/category" element={<Category/>}/>
           <Route path="/product" element={<Product/>}/>
        </Routes>
        <Footer/>
      </main>
    </div>
    </MasterContext.Provider>
  </div>
}

export default App;
