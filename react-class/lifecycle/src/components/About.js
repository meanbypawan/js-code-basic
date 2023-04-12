import { Component } from "react";

class About extends Component {
    constructor() {
        super();
        console.log("About constructor called.....");
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
        console.log("About render....");
        return <> <h1>About Component...</h1>
            <br /><br /><br />
            <label>Counter : {this.state.counter}</label><br />
            <button onClick={this.incrementValue}>Increment Counter</button>
        </>

    }
    shouldComponentUpdate(props, state){
        if(state.counter%2==0)
          return true;
        return false;
    }
    componentDidMount() {
        console.log("About Did Mount...");
    }
    componentDidUpdate() {
        console.log("About Did update..");
    }
    componentWillUnmount() {
        console.log("About Unmount/Destroyted....");
    }
}

export default About;