import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'
import todosList from "./todos.json";
import { Section } from './components/section/Section'
import Header from './components/header/Header'
import ActiveHeader from './components/activeHeader/ActiveHeader'
import CompletedHeader from './components/completedHeader/CompletedHeader'
import Footer from './components/footer/Footer'
import TodoList from './components/todolist/TodoList';
import TodoItem from './components/todoitem/TodoItem'

const Active = (props) => {
  let activeTodos = [];
  props.todos.map((todo) => {
    if (!todo.completed) {
      activeTodos.push(todo)
    }
  })
  return (    
    <section className = "main">
      <ul className = "todo-list">
        {activeTodos.map((todo) => (
          <TodoItem 
            userId = {todo.userId}
            id = {todo.id}
            title = {todo.title}
            completed = {todo.completed}
          />
        ))}
      </ul>
    </section>    
  )  
} 

const Completed = (props) => {
  let completedTodos = [];
  props.todos.map((todo) => {
    if (todo.completed) {
      completedTodos.push(todo)
    }
  })
  return (
    <section className = "main">
      <ul className = "todo-list">
        {completedTodos.map((todo) => (
          <TodoItem 
            userId = {todo.userId}
            id = {todo.id}
            title = {todo.title}
            completed = {todo.completed}
          />
      ))}
    </ul>
  </section>
  )   
} 

class App extends Component {
  constructor(props) {
    super(props)    
  } 
  
  render() {
    return (
      <div className = "todoapp">
        <Section>          
        <Switch>
          <Route exact path = "/">
            <div className = "header">   
              <Header                 
                addTodo = {this.createTodo} />
            </div>
              <TodoList 
                todos = {this.props.todos} 
                toggle = {this.toggle} 
                destroy = {this.destroy} 
              /> 
          </Route>
          <Route path = "/active">
            <div className = "header">   
              <ActiveHeader addTodo = {this.createTodo} />
            </div>
            <Active todos = {this.props.todos} 
            />
          </Route>  
          <Route path = "/completed">
            <div className = "header">   
              <CompletedHeader addTodo = {this.createTodo} />
            </div>
            <Completed todos = {this.props.todos}
            />
          </Route> 
        </Switch>         
          <Footer
            remainder = {this.showRemainder} 
            clearCompleted = {this.clearCompleted} />
        </Section>
      </div>
    );
  }
  
  showRemainder = () => {
    let remainder = 0;
    this.props.todos.map((todo) => {
      if (!todo.completed) {
        remainder += 1;
      }
    })
    return remainder;
  }
  
  createTodo = (event) => {
    if (event.key === "Enter") {          
      let newTodo = {
       "userId": 1,
       "id": uuidv4(),
       "title": event.target.value,
       "completed": false
      }    
      this.props.add(newTodo);
    }           
  }
  
  toggle = (id) => {         
    let newTodos = this.props.todos.map((todo) =>{
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed
        }
      }
      return todo;
    }) 
    this.setState((state) => {
      return {
        ...state,
        todos: newTodos
      }
    })
  }

  destroy = (id) => {    
    let newTodos = []
    this.props.todos.map((todo) => {
      if(todo.id !== id) {
        let newItem = todo;
        newTodos.push(newItem)
      }
    })
    this.props.destroy(newTodos)
  }  

  clearCompleted = () => {
    let newTodos = []
    this.props.todos.map((todo) => { 
      if (!todo.completed) {
        let newItem = todo;
        newTodos.push(newItem); 
      }
    })
      this.setState((state) => {
        return {
          ...state,
          todos: newTodos
        }
      })   
  }
}

const ADD = 'ADD';
const TOGGLE = 'TOGGLE'
const DESTROY = 'DESTROY'
const CLEAR = 'CLEAR' 

const add = (todo) => {
  return {
    type: ADD, 
    todo: todo
  }
}

const toggle = (todo) => {
  return {
    type: TOGGLE
  }
} 

const destroy = (todo) => {
  return {
    type: DESTROY,
    todo: todo
  }
}

const clear = (todo) => {
  return {
    type: CLEAR
  }
}

const todoReducer = (state = todosList, action) => {
  switch (action.type) {
    case ADD: 
      return [...state, action.todo]
    case DESTROY:
      return [...state.splice(action.todo.id)]    
    default:
      return state;
  }
}

const store = createStore(todoReducer)

const mapStateToProps = (state) => {
  return {
    todos: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    add: (todo) => {
      dispatch(add(todo))
    },
    destroy: (todo) => {
      dispatch(destroy(todo))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(App);

class AppWrapper extends Component {
  render() {
    return (
      <Provider store = {store}>
        <Container />
      </Provider>
    )
  }
}

export default AppWrapper;
