import React, {Component} from 'react';
import { connect } from 'react-redux';
import { toggleTodo, deleteTodo } from '../../Actions';


class TodoList extends Component {
  render() {
    return (
      <section className = "main">
        <ul className = "todo-list">
          {this.props.todos.map((todo) => {
            return (
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
            )
          })}
        </ul>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {todos: state}  
} 

const mapDispatchToProps = dispatch => {
  return {
    toggleTodo: (id) => {
      dispatch(toggleTodo(id))
    },
    deleteTodo: (id) => {
      dispatch(deleteTodo(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);