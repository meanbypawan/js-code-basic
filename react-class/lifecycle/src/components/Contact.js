import { PureComponent } from "react";
import { Component } from "react";

class Contact extends PureComponent{
    constructor() {
        super();
        console.log("Contact constructor called.....");
        this.state = {
            counter: 0
        }
    }
    incrementValue = ()=>{
        this.setState({
          counter: this.state.counter+1
        })
    }
    render() {
        console.log("Contact render....");
        return <> <h1>Contact Component...</h1>
            <br /><br /><br />
            <label>Counter : {this.state.counter}</label><br />
            <button onClick={this.incrementValue}>Increment Counter</button>
        </>

    }
}

export default Contact;