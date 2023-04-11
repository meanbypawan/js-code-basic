import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import SideBar from './components/SideBar';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import CounterDemo from './components/CounterDemo';
import EvenOddCounter from './components/EvenOddCounter';
import StudentList from './components/StudentList';
import Registration from './components/Registration';
class App extends Component{
  render(){
  return <div>
    <SideBar/>
    <div class="container-fluid">
      <main class="tm-main">
        <SearchBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
          <Route path='/counter' element={<CounterDemo/>}/>
          <Route path='/evenodd' element={<EvenOddCounter/>}/>
          <Route path='/student-list' element={<StudentList/>}/>
          <Route path='/registration' element={<Registration/>}/>
        </Routes>
        <Footer/>
      </main>
    </div>

  </div>
  }
}

export default App;
