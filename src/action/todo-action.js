export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";


export const addTodo = (add_todo => {
    return {
        type: ADD_TODO,
        payload: add_todo
    }
});

export const deleteTodo = (delete_todo => {
    return {
        type: DELETE_TODO,
        payload: Number(delete_todo)
    }
});