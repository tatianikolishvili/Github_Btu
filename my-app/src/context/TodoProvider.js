import React, { useEffect, useState } from "react";
import TodoListArray from "../data/todo-list"
import HTTP_SERVICE, { HHTP_SERVICE } from '../services/http'

export const TodoProvider = React.createContext(null);
function TodoProviderComponent ({ children }){
    const [todoList, setTodoList] = useState([]);
    useEffect(() => {
        HTTP_SERVICE.getTodoList({callback: setTodoList, limit: 30});
    },[]);
    const onTodoChange = (todo) => {
        if (!todo.completed) {
            const index = todoList.findIndex((el)=> el.id === todo.id);
            const newState = [
                ...todoList.slice(0, index),
                {
                    ...todo,
                    completed: !todo.completed,
                },
                ...todoList.slice(index+1),
            ]
            setTodoList(newState);
        } else {
        }
    };
    const onTodoAdd = (newTodo) => {
        const newList = [... todoList, newTodo];
        setTodoList(newList);
    };
    return ( <TodoProvider.Provider value ={{todoList, setTodoList, onTodoChange, onTodoAdd}}>
        {children}
    </TodoProvider.Provider>
    );
}




export default TodoProviderComponent;