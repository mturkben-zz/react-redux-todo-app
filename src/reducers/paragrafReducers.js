import {ADD_TODO , DELETE_TODO} from "../action/todo-action";

const defaultState = {
    todoList:[]
}
const todoReducer = (state = defaultState,{type,payload}) => {
    switch (type) {
        case ADD_TODO:
            return {
                ...state,
                todoList: [...state.todoList,payload]
            }
        case DELETE_TODO:
            console.log(payload);
            return {
                ...state,
                todoList: state.todoList.filter(todo => todo.id !== payload)
            }
        default:
            return state
    }
}
export default todoReducer;