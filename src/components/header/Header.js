import React, { Component } from 'react';
import { addTodo } from '../../Actions';
import { connect } from 'react-redux';

class Header extends Component {
    
    handleCreate = (event) => {
        if (event.key === "Enter") {            
            this.props.addTodo(event.target.value)
        }           
      }

    render () {
        return (
            <div>
                <header className = "header">
                <h1>todos</h1>
                <input 
                    onKeyPress = {this.handleCreate} 
                    className = "new-todo" 
                    placeholder = "What needs to be done?"
                    autoFocus 
                />
                </header>
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      addTodo: () => {
        dispatch(addTodo())
      }
    }
};

  export default connect(null, mapDispatchToProps)(Header)