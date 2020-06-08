import { Component } from 'react';
import { connect } from 'react-redux';

class Remainder extends Component {

  showRemainder = () => {
    let remainder = 0;
    this.props.todos.map((todo) => {
      if (!todo.completed) {
        remainder += 1;
      }     
    })
    return remainder;    
  }

  render() {
    return (
      this.showRemainder()
    )        
  }  
}

const mapStateToProps = state => ({    
    todos: state
})


export default connect(mapStateToProps, null)(Remainder);