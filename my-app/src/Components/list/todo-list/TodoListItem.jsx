function TodoListItem ({todo, onChange}) {
    return (
        <div
                key = {todo.id} 
                className={`list-group-item list-group-item-action list-group-item-${
                    todo.completed ? "success" : "danger"}`}
                onClick={() => onChange(todo)}
            >
                {todo.title}
        </div>
    )
}

export default TodoListItem;