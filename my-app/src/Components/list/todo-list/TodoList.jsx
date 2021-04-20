import { useEffect } from "react";
import "./todo-list.css";   
function TodoList ({data = []}) {
    useEffect(() => {
        console.log(data);
    }, [data]);

    let listHtml = null,
    if(data.length) {
        listHtml = data.map((todo) => {
            return (
                <div className="list-group-item list-group-item-action list-group-item-danger">{todo.title}</div>
            );
        });
    }
    return (
        <div className="list-group">
            {listHtml} 
            {/* <div className="list-group-item list-group-item-action list-group-item-danger">A simple default list group item</div> 
            <div className="list-group-item list-group-item-action list-group-item-success">A simple primary list group item</div>  */}
      </div>
    )
}
export default TodoList;