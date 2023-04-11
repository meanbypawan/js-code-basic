import logo from './logo.svg';
import './App.css';
import data from './data';
import { Component } from 'react';
class App extends Component {
  constructor(){
    super();
    this.state = {
      studentList: data,
      branchFilter: "all",
      rollStatus: false
    }
  }
  addStudent = ()=>{
    let name = this.name.value;
    let mobile = this.mobile.value;
    let roll = this.roll.value;
    let branch = this.branch.value;

    let newStudent = {name,mobile,roll,branch};
    this.setState({
      studentList: [...this.state.studentList,newStudent] // 
    })
  }
  changeBranchFilter = (branch)=>{
    this.setState({
      branchFilter: branch
    })
  }
  validateRoll = ()=>{
    let roll = this.roll.value;
    let status = this.state.studentList.some((student)=>student.roll == roll);
    this.setState({rollStatus: status});
  }
  deleteRecord = (rollNumber)=>{
    if(window.confirm("Are you sure ?")){
      let index = this.state.studentList.findIndex((student)=>student.roll == rollNumber);
      this.state.studentList.splice(index,1);
      this.setState({studentList: this.state.studentList});
    }
  }
  render(){
     return <div className="container">
      <div className="row bg-danger mt-2">
         <div className="col-12 text-center p-2 text-white font-weight-bold">Student App</div>
      </div>
      <div className="row mt-5 mb-5">
        <div className="col-5">
          <input onBlur={this.validateRoll} ref={(roll)=>this.roll = roll} type="text" className="form-control" placeholder='Enter Roll Number'/>
          {this.state.rollStatus && <small className='text-danger'>Roll number is already taken</small>}
        </div>
        <div className="col-5">
          <input ref={(name)=>this.name = name} type="text" className="form-control" placeholder='Enter Name'/>
        </div>
      </div>
      <div className="row mt-5 mb-2">
        <div className="col-5">
          <input ref={(mobile)=>this.mobile = mobile} type="text" className="form-control" placeholder='Enter Mobile Number'/>
        </div>
        <div className="col-5">
          <select ref={(branch)=>this.branch = branch} className="form-control">
            <option value="0">Select Branch</option>
            <option value="CS">CS</option>
            <option value="IT">IT</option>
            <option value="CV">CV</option>
            <option value="EC">EC</option>
          </select>
        </div>
      </div>
      <div className="row mt-2 mb-2">
        <div className="col-2">
          <button onClick={this.addStudent} style={{width:'80%'}} className="btn btn-danger">Add</button>
        </div>
        <div className="col-5 offset-3 text-right">
          <button onClick={()=>{this.changeBranchFilter("CS")}} className="btn btn-primary">CS ({this.state.studentList.filter(student=>student.branch=="CS").length})</button>
          <button onClick={()=>{this.changeBranchFilter("IT")}} className="btn btn-danger ml-1">IT ({this.state.studentList.filter(student=>student.branch=="IT").length})</button>
          <button onClick={()=>{this.changeBranchFilter("CV")}} className="btn btn-warning ml-1">CV ({this.state.studentList.filter(student=>student.branch=="CV").length})</button>
          <button onClick={()=>{this.changeBranchFilter("EC")}} className="btn btn-success ml-1">EC ({this.state.studentList.filter(student=>student.branch=="EC").length})</button>
          <button onClick={()=>{this.changeBranchFilter("all")}}className="btn btn-outline-success ml-1">Total: ({this.state.studentList.length})</button>
        </div>
      </div>
      <hr/>
      <table className="table">
         <thead>
            <tr>
              <th>S.no</th>
              <th>Roll</th>
              <th>Name</th>
              <th>Mobile</th>
              <th>Branch</th>
              <th>Delete</th>
            </tr>
         </thead>
         <tbody>
            {this.state.studentList.filter((student)=>this.state.branchFilter=="all"||student.branch == this.state.branchFilter).map((student,index)=><tr>
              <td>{index+1}</td>
              <td>{student.roll}</td>
              <td>{student.name}</td>
              <td>{student.mobile}</td>
              <td>{student.branch}</td>
              <td>
                <button  onClick={()=>this.deleteRecord(student.roll)}  className="btn btn-outline-danger">Delete</button>
              </td>
            </tr>)}
         </tbody>
      </table>
     </div>
  }
}

export default App;
