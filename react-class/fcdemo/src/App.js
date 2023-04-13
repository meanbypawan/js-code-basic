import logo from './logo.svg';
import './App.css';
import {  Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Counter from './components/Counter';
import EOCounter from './components/EOCounter';
import Navigation from './components/Navigation';
import Signup from './components/Signup';

function App() {
   return <div className="container">
   <Navigation/>
   <div className="container-fluid mt-5">
       <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/counter" element={<Counter/>}/>
        <Route path="/eocounter" element={<EOCounter/>}/>
        <Route path="/signup" element={<Signup/>}/>
       </Routes>
   </div>
 </div>
 
}

export default App;
