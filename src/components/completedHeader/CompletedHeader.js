import React, { Component } from 'react';
import { addTodo } from '../../Actions';
import { connect } from 'react-redux';

class CompletedHeader extends Component {
    handleCreate = (event) => {
        if (event.key === "Enter") { 
            this.props.addTodo(event.target.value)
        }           
      }

    render () {
        return (
            <div>
                <header className = "header">
                <h1>completed</h1>
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
        addTodo: (input) => {
            dispatch(addTodo(input))
        }
    }   
}

export default connect(null, mapDispatchToProps)(CompletedHeader)