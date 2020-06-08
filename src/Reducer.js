import { ADD_TODO, TOGGLE_TODO, DELETE_TODO, CLEAR_COMPLETED_TODOS } from './Actions';
import todosList from "./todos.json";

const initialState = todosList;

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TODO: 
        return [...state, {
          userId: action.userId,
          id: action.id,
          title: action.input,
          completed: action.completed        
        }]
      case TOGGLE_TODO:
       state.map((todo) => {
         if (todo.id === action.id)
         return {
          ...state, completed: !todo.completed
         }
       })
      case DELETE_TODO:
        let newTodos = []
         state.map(todo => {
          if (todo.id !== action.id) {
            newTodos.push(todo)
          }
          return newTodos;             
        })
        break;
      case CLEAR_COMPLETED_TODOS:
        return [...state.filter(todo => !todo.completed)]    
      default:
        return state;
    }
  }

  export default todoReducer;
