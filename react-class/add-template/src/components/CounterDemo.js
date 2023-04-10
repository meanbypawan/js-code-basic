import { Component } from "react";

class CounterDemo extends Component{
    // How to create state in component
    constructor(){
        super();
        this.state = {
            counter: 0
        };
    }
    changeCounter = ()=>{
       this.setState({counter: this.state.counter+1});
    }

    render(){
        return <div>
           <h1>Counter : {this.state.counter}</h1> 
           <br/>
           <button onClick={this.changeCounter} className="btn btn-info">Change counter</button>
        </div>
    }
}

export default CounterDemo;