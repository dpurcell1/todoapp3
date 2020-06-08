import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, CLEAR_COMPLETED_TODOS } from './Actions';
import todosList from "./todos.json";

const initialState = todosList;

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO: 
        return [...state, action.payload]
      case TOGGLE_TODO:       
         return [...state.map((todo) => {
          if (todo.id === action.payload) {
            todo.completed = !todo.completed
          }
          return todo
        })]
      case DELETE_TODO:            
       return [...state.filter(todo => todo.id !== action.payload)] 
      case CLEAR_COMPLETED_TODOS:
        return [...state.filter(todo => !todo.completed)]    
      default:
        return state;
    }
  }

  export default todoReducer;
