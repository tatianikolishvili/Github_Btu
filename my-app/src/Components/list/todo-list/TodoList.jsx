import { useEffect } from "react";
import "./todo-list.css";   
import TodoListItem from "./TodoListItem";
function TodoList ({ data = [], onTodoChange }) {
    useEffect(() => {
        console.log(data);
    }, [data]);

    let listHtml = null;
    if (data.length) {
        
    }
    return (
        <div className="list-group">
            {listHtml = data.map((todo) => {
            return <TodoListItem todo={todo} key= {todo.id} onChange = {onTodoChange}/>
        })}
           
           
      </div>
    );
}
export default TodoList;