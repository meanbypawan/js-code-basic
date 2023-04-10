import { Component } from "react";

class EvenOddCounter extends Component{
    constructor(){
        super();
        this.state = {
            evenCounter: 0,
            oddCounter: 1
        }
    }
    changeEvenCounter = ()=>{
        this.setState({
            evenCounter: this.state.evenCounter + 2
        })
    }
    changeOddCounter = ()=>{
        this.setState({
            oddCounter: this.state.oddCounter + 2
        })
    }
    render(){
        return <div>
            <div className="row">
                <div className="col-md-4">
                    <label>Even Counter : {this.state.evenCounter}</label><br/>
                    <button onClick={this.changeEvenCounter} className="btn btn-primary">Even Counter</button>
                </div>
                <div className="col-md-4 offset-1">
                    <label>Odd Counter : {this.state.oddCounter}</label><br/>
                    <button onClick={this.changeOddCounter} className="btn btn-danger">Odd Counter</button>
                </div>
            </div>
        </div>
    }
}

export default EvenOddCounter;