function AddTodoForm (props) {
    return (
        <form>
            <div className="mb-3">
                <label htmlFor="todoName" className="form-label">
                    Email address
                </label>
                <input
                    type="text"
                    className="form-control" 
                    id="todoName" 
                />
            </div>
            <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="completed"/>
                <label className="form-check-label" for="exampleCheck1">
                    Completed
                </label>
            </div>
            <button type="submit" className="btn btn-primary">
                Submit
            </button>
        </form>
    )
}
export default AddTodoForm;