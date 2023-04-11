import { Component } from "react";
import Second from "./Second";

class First extends Component{
    constructor(props){
     super(props);
     console.log(this.props);
    }
    render(){
        return <div>
            <h3>First Component.....</h3>
            <h3></h3>
            <Second userData={this.props}/>
        </div>
    }
}

export default First;