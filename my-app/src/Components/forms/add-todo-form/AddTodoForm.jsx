function AddTodoForm (props) {
    return (
        <form>
            <div class="mb-3">
                <label for="todoName" class="form-label">
                    Email address
                </label>
                <input
                    type="text"
                    class="form-control" 
                    id="todoName" 
                />
            </div>
            <div class="mb-3 form-check">
                <input type="checkbox" class="form-check-input" id="completed"/>
                <label class="form-check-label" for="exampleCheck1">
                    Completed
                </label>
            </div>
            <button type="submit" class="btn btn-primary">
                Submit
            </button>
        </form>
    )
}
export default AddTodoForm;