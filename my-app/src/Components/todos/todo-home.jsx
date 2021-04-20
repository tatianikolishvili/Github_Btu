import AddTodoForm from "../forms/add-todo-form/AddTodoForm"

function TodosHome(props) {
    return (
        <div className="row"> <h1> Todos </h1>
        <AddTodoForm/>
        </div>
    
    )
}

export default TodosHome