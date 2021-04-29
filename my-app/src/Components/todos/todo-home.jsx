import AddTodoForm from "../forms/add-todo-form/AddTodoForm"
import TodoList from "../list/todo-list/TodoList"
import { useState } from "react"
import TodoProviderComponent from '../../context/TodoProvider';

function TodosHome(props) {
    return (
        <TodoProviderComponent>
             <div className="row"> <h1>
             Todos </h1> 
            <div className="col-6"> 
                <AddTodoForm/> 
            </div>
            <div className="col-6"> 
                <TodoList/>
            </div>
        </div>
        </TodoProviderComponent>
    
    )
}

export default TodosHome;