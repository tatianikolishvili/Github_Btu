import { useContext, useEffect } from "react";
import "./todo-list.css";   
import TodoListItem from "./TodoListItem";
import {TodoProvider} from '../../../context/TodoProvider'
function TodoList (props) {
    const {todoList} = useContext(TodoProvider);
    return (
        <div className="list-group">
            {todoList.map((todo) => {
            return <TodoListItem todo={todo} key= {todo.id}/>
        })}
      </div>
    );
    }
export default TodoList;