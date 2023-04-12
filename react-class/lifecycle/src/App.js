import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
/*
  1. Mounting (consturcotr--> render -- componentDidMount)
  2. Updating (render ---- componentDidUpdate )
  3. Unmounting
*/
class App extends Component {
  constructor(){
    super();
    
    //console.log("App Constructor called....");
  }
  
  render(){
    console.log("Render Called....");
    return <div>
      <h1>App Component...</h1>
      <Link to="/about">About us</Link>&nbsp;&nbsp;&nbsp;
      <Link to="/contact">Contact us</Link>
      <Routes>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>  
      </Routes> 

    </div>
  }
  componentDidMount(){
     //console.log("Component Did Mount called...");
  }
  componentDidUpdate(){
    //console.log("Component Did updated called......");
  }
}

export default App;
