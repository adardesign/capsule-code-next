import React from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = ({todos, handleToggleTodo, handleDeleteTodo}) => <ul>
  {todos.map((todo) => <Todo
    key={todo.id}
    {...todo}
  />)}
</ul>;

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    done: PropTypes.bool,
  })),
};

export default TodoList;
