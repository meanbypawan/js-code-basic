import { Component } from "react";

class Second extends Component{
    constructor(props){
        super(props);
        // props: {userData:{name: '',mobile:''}}
    }
    render(){
        return <div>
            <h4>It second Component(Child of First)</h4>
            {this.props.userData.name}&nbsp;
            {this.props.userData.mobile}&nbsp;
            {this.props.userData.age}&nbsp;
            {this.props.userData.address}&nbsp;
        </div>
    }
}

export default Second;