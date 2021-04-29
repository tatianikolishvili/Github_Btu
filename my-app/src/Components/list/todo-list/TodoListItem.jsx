import {useContext} from 'react';
import {TodoProvider} from '../../../context/TodoProvider'



function TodoListItem ({todo}) {
    const {onTodoChange} = useContext(TodoProvider);
    return (
        <div
                key = {todo.id} 
                className={`list-group-item list-group-item-action list-group-item-${
                    todo.completed ? "success" : "danger"}`}
                onClick={() => onTodoChange(todo)}
            >
                {todo.title}
        </div>
    )
}

export default TodoListItem;