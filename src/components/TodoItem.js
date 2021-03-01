import React from 'react';
import {store} from '../App';
import {completeTodo, deleteTodo} from '../redux/actions';

const TodoItem = (props) => {
  const onItemClick = (e) => {
    e.preventDefault();
    store.dispatch(completeTodo(props.index));
  }
  const onDeleteClicked = (e) => {
    e.preventDefault();
    store.dispatch(deleteTodo(props.index));
  }

    return(
      <li>
        <a onClick={onItemClick} style={{textDecoration: props.completed? 'line-through':'none'}}>{props.message.trim()}</a>
        <a onClick={onDeleteClicked} style={{textDecoration: 'none', cursor: 'pointer'}}> [x]</a>
      </li>
    );
  
}

export default TodoItem;
