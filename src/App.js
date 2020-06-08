import React, { Component } from "react";
import { Route, Switch } from 'react-router-dom';
import { Section } from './components/section/Section';
import Header from './components/header/Header';
import ActiveHeader from './components/activeHeader/ActiveHeader';
import Active from './components/active/Active';
import CompletedHeader from './components/completedHeader/CompletedHeader';
import Completed from './components/completed/Completed';
import Footer from './components/footer/Footer';
import TodoList from './components/todolist/TodoList';

class App extends Component {
  
  render() {
    return (
      <div className = "todoapp">
        <Section>          
        <Switch>
          <Route exact path = "/">
            <div className = "header">   
              <Header/>
            </div>
              <TodoList /> 
          </Route>
          <Route path = "/active">
            <div className = "header">   
              <ActiveHeader />
            </div>
            <Active />
          </Route>  
          <Route path = "/completed">
            <div className = "header">   
              <CompletedHeader />
            </div>
            <Completed />            
          </Route> 
        </Switch>         
        <Footer />
        </Section>
      </div>
    );
  }  
}

export default App;







