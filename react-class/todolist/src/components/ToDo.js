import { Component } from "react";
import data from './toDoData';

class ToDo extends Component{
    constructor(){
        super();
        this.state = {
            taskList: data,
            priorites:[{id:1, priority: "Low"},{id:2, priority: "Normal"},{id:3, priority: "High"}],
            activeButtonStatus: true,
            deActiveButtonStatus: false,
            taskStatus: "active"
        }
    }
    addTask = ()=>{
      let title = this.title.value;
      let pid = this.priority.value;
      let date = new Date();
      date = date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear(); 
      let status = "active";
      let id = this.state.taskList.length+2;
      let newTask = {id,title,pid,date,status};
      this.setState({
        taskList: [...this.state.taskList,newTask]
      });
    }
    changeTaskStatus = (status)=>{
        this.setState({taskStatus: status,
          activeButtonStatus: !this.state.activeButtonStatus,
          deActiveButtonStatus: !this.state.deActiveButtonStatus   
        });
    }
    moveTask = (status,id)=>{
      let task =  this.state.taskList.find((task)=>task.id == id);
      task.status = status;
      this.setState({});
    }
    render(){
        return<div className="container-fluid">
            <div className="row">
                <div className="col-12 text-center bg-danger text-white">
                    <h3>ToDo App</h3>
                </div>
            </div>
            <div className="container mt-4">
                <div className="row mt-4 mb-4">
                    <div className="col-md-6">
                        <input ref={(titleDom)=>this.title=titleDom} type="text" className="form-control" placeholder="Enter Task Title"/>
                    </div>
                    <div className="col-md-6">
                       <select ref={(priorityDom)=> this.priority = priorityDom} className="form-control">
                         {this.state.priorites.map((obj,index)=><option value={obj.id}>{obj.priority}</option>)}
                       </select>
                    </div>
                    <div className="col-2 mt-2">
                        <button onClick={this.addTask} className="btn btn-outline-success">Add Task</button>
                    </div>
                </div>
                <div className="row mt-4 mb-4">
                    <div className="col-md-4">
                        <button onClick={()=>this.changeTaskStatus('active')} disabled={this.state.activeButtonStatus} className="btn btn-success">Active : {this.state.taskList.filter((task)=>task.status=="active").length}</button>

                        <button disabled={this.state.deActiveButtonStatus} onClick={()=>this.changeTaskStatus('deactive')} className="btn btn-danger ml-1">Deactive : {this.state.taskList.filter((task)=>task.status=="deactive").length}</button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>S.no</th>
                                    <th>Title</th>
                                    <th>Date</th>
                                    <th>Priority</th>
                                    <th>Operation</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.taskList.sort((o1,o2)=>{
                                    return o2.pid - o1.pid;
                                }).filter((task)=>task.status == this.state.taskStatus).map((task,index)=><tr style={{backgroundColor: task.pid == 3 ? '#f08080' : task.pid==2? '#04aa6d':'orange'}}>
                                    <td>{index+1}</td>
                                    <td>{task.title}</td>
                                    <td>{task.date}</td>
                                    <td>{this.state.priorites.find((priorityObject)=>task.pid == priorityObject.id).priority}</td>
                                    <td>
                                     {
                                        task.status == 'active' ? <button className="btn btn-danger" onClick={()=>{this.moveTask('deactive',task.id)}}>Deactive</button> : <button className="btn btn-success" onClick={()=>this.moveTask('active',task.id)}>Active</button>
                                     }
                                    </td>
                                </tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default ToDo;