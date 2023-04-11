import logo from './logo.svg';
import './App.css';
import First from './components/First';
import { Component } from 'react';

class App extends Component {
  constructor(){
    super();
    this.name = "ABC";
    this.mobile = "900911222";
    this.age = 21;
    this.address = "31, Indore M.p";
  }
  render(){
    return <div>
      <h1>It is App components.....</h1>
      <First name={this.name} mobile={this.mobile} age = {this.age} address={this.address}/>
    </div>
  }
}

export default App;
