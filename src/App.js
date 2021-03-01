//libraries
import React from 'react';
import { createStore } from 'redux';
import {todoApp} from './redux/reducer';
//components
import AddTodoForm from './components/AddTodoForm';
import TodoList from './components/TodoList';
import './App.css'

var defaultState = {
  items: [],
};

var store = createStore(todoApp, defaultState);

const App = () => {
    return (
      <div>
        <h1>Todo App</h1>
        <AddTodoForm />
        <TodoList />
      </div>
    );
  
}

export default App;
export {store};
