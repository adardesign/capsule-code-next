import React from 'react';
// import './Todo.css';
import PropTypes from 'prop-types';

const Todo = ({title, id, done, handleToggleTodo, handleDeleteTodo}) => <li>
  <span>{title}</span>
</li>;

Todo.propTypes = {
  title: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};

export default Todo;
