import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import { clearCompletedTodos } from '../../Actions';
import { connect } from 'react-redux';
import Remainder from '../../components/remainder/Remainder'

class Footer extends Component {
  render() {
    return (
      <footer className="footer">      
        <span className="todo-count">
          <Remainder /> item(s) left
            </span>
              <ul className="filters">
                <li>
                  <NavLink exact activeClassName = "selected" to="/">All</NavLink>
                </li>
                <li>
                  <NavLink activeClassName = "selected" to="/active">Active</NavLink>
                </li>
                <li>
                  <NavLink activeClassName= "selected" to ="/completed">Completed</NavLink>
                </li>
              </ul>
              <button 
                onClick = {this.props.clearCompletedTodos} 
                className="clear-completed">Clear completed
              </button>
      </footer>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    clearCompletedTodos: (todo) => {
      dispatch(clearCompletedTodos(todo))
    }
  }
};

export default connect(null, mapDispatchToProps)(Footer)

