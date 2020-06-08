import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../Actions';
 

class Active extends Component {
    Active = () => {
        let activeTodos = [];
        this.props.todos.map((todo) => {
          if (!todo.completed) {
            activeTodos.push(todo)
          }          
        })
        return (
            <section className = "main">
                <ul className = "todo-list">
                    {activeTodos.map((todo) => (
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
            this.active()
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

export default connect(mapStateToProps, mapDispatchToProps)(Active);