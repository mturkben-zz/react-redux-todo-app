import React, { useState } from 'react'
import {connect} from "react-redux";

import {addTodo,deleteTodo} from "./action/todo-action";


const App = (props) => {
    const [getNameValue, setNameValue] = useState("");
    const [getDataValue, setDataValue] = useState("");
    const [getTodoId, setTodoId] = useState(0);

    const sendData = () => {
        setTodoId(getTodoId +1);
        const composeData  = {name:getNameValue,data:getDataValue,id:getTodoId}
        if(composeData.name === "" || composeData.data === "") {alert("enter value in Input-box");return false}
        props.onAddTodo(composeData);
        setNameValue("");
        setDataValue("");
    }
    const deleteData = (get_id) => {
       props.onDeleteTodo(get_id);
    }
    return (
        <div className="container">  
            <div className="row d-flex justify-content-center align-items-center flex-row">
                <h1>
                    TODO APP
                </h1>
                <hr className="col-12"/>
                    <div className="col-10 d-flex justify-content-center align-items-center flex-column">
                        <div className="h2"> Add Todo</div>
                        <input type="text" name="name" className="form-control m-1 p-1" value={getNameValue} onChange={e => setNameValue(e.target.value)} placeholder="Add Name"/>
                        <input type="text" name="data" className="form-control m-1 p-1" value={getDataValue} onChange={e => setDataValue(e.target.value)} placeholder="Add Data"/>
                        <input type="submit" name="submit" className="btn btn-success m-1 p-1" onClick={sendData}/>
                    </div>
                <hr className="col-12"/>
                <div className="col-12">
                    <div className="card w-100">
                        <div className="card-header">
                            To Do List
                        </div>
                        <div className="card-body">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">To Do Name</th>
                                        <th scope="col">To Do Data</th>
                                        <th scope="col">DELETE</th>
                                    </tr>
                                </thead>
                                <tbody> 
                                {
                                    props.allTodo.todoList === [] ? null :
                                    props.allTodo.todoList.map(todo => {
                                        return(
                                            <tr key={todo.id}>
                                                <th scope="row"> {todo.id} </th>
                                                <td>{todo.name}</td>
                                                <td>{todo.data}</td>
                                                <td><button className="btn btn-danger" value={todo.id} onClick={(e) => deleteData(e.target.value) }>DELETE</button></td>
                                            </tr>
                                        );
                                    })
                                }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
const mapStateToProps = state => {return state}

const mapDispatchToProps = {
    onAddTodo: addTodo,
    onDeleteTodo:deleteTodo
}

export default connect(mapStateToProps,mapDispatchToProps)(App);