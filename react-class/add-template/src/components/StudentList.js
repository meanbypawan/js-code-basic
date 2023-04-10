import { Component } from "react";

class StudentList extends Component{
    students = [{
        id: 100,
        name: 'A',
        age: 21,
        per: 65
    },
    {
        id: 101,
        name: 'B',
        age: 25,
        per: 689
    },
    {
        id: 102,
        name: 'C',
        age: 30,
        per: 98
    },{
        id: 103,
        name: 'D',
        age: 19,
        per: 87
    }];
    render(){
        return <div>
            <h1>Student List Component</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Per.</th>
                    </tr>
                </thead>
                <tbody>
                    {this.students.map((student,index)=><tr>
                        <td>{student.id}</td>
                        <td>{student.name}</td>
                        <td>{student.age}</td>
                        <td>{student.per}</td>
                    </tr>)}
                </tbody>
            </table>
        </div>
    }
}

export default StudentList;