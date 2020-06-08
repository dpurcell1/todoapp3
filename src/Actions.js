import { v4 as uuidv4} from 'uuid'
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const DELETE_TODO = 'DESTROY_TODO'
export const CLEAR_COMPLETED_TODOS = 'CLEAR_COMPLETED_TODOS' 

export const addTodo = input => {
    return {
        type: ADD_TODO,
        userId: 1,
        id: uuidv4(),
        title: input,
        completed: false
    }     
}

export const toggleTodo = id => ({  
    type: TOGGLE_TODO,
    id  
}) 

export const deleteTodo = id => ({ 
    type: DELETE_TODO,
    id  
})

export const clearCompletedTodos = () => ({  
    type: CLEAR_COMPLETED_TODOS
})


