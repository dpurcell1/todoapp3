import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../Actions';
 

class Completed extends Component {

    Completed = () => {
        let completedTodos = [];
        this.props.todos.map((todo) => {
          if (!todo.completed) {
            completedTodos.push(todo)
          }          
        })
        return (
            <section className = "main">
                <ul className = "todo-list">
                    {completedTodos.map((todo) => (
                        <li key = {todo.id} className = {todo.completed ? "completed" : ""}>
                            <div className = "view">
                                <input 
                                    onClick = {this.props.toggleTodo} 
                                    className = "toggle" type = "checkbox" 
                                    checked = {todo.completed} 
                                />
                                <label>{todo.title}</label>
                                <button 
                                    onClick = {this.props.deleteTodo} 
                                    className = "destroy">            
                                </button>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>    
        )
    }
        
    render () {
        return (
            this.completed()
        )  
    } 
}
        


const mapStateToProps = state => ({
    todos: state
    
})

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTodo: (id) => {
            dispatch(toggleTodo(id))
        },
        deleteTodo: (id) => {
            dispatch(deleteTodo(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Completed);