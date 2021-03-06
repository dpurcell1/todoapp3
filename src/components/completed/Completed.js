import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../Actions'; 

class Completed extends Component {
    filterTodos = () => {
        const completedTodos = this.props.todos.filter(todo => todo.completed)
        return completedTodos;
    }   

    render () {
        return (
            <section className = "main">
                <ul className = "todo-list">
                    {this.filterTodos().map((todo) => {                        
                        return (
                            <li key = {todo.id} className = {todo.completed ? "completed" : ""}>
                                <div className = "view">
                                    <input 
                                        onChange = {() => this.props.toggleTodo(todo.id)} 
                                        className = "toggle" type = "checkbox" 
                                        checked = {todo.completed}                    
                                    />
                                    <label>{todo.title}</label>
                                    <button 
                                        onClick = {() => this.props.deleteTodo(todo.id)} 
                                        className = "destroy">            
                                    </button>
                                </div>
                            </li>
                        )                        
                    })}
                </ul>
            </section>
        ) 
    }       
}
        


const mapStateToProps = (state) => {
    return {todos: state}  
  } 
  
  const mapDispatchToProps = {
   toggleTodo,
   deleteTodo
}
  
   
export default connect(mapStateToProps, mapDispatchToProps)(Completed);