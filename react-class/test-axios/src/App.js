import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import SideBar from './components/SideBar';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Category from './components/Category';
class App extends Component{
  render(){
  return <div>
    <SideBar/>
    <div class="container-fluid">
      <main class="tm-main">
        <SearchBar/>
        <Routes>
           <Route path="/category" element={<Category/>}/>
        </Routes>
        <Footer/>
      </main>
    </div>

  </div>
  }
}

export default App;
