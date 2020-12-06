import React from 'react';
import PropTypes from 'prop-types';
// import './App.css';

import AddTodo from './AddTodo';
import TodoList from './TodoList';

const App = ({todos, handleUpdateTodo, handleDeleteTodo, handleAddTodo}) => <div className="App">
  <div className="App-header">
    <h2>App lock example - remebers for 10 seconds</h2>
  </div>
  <AddTodo handleAddTodo={handleAddTodo} />
  <TodoList
    todos={todos}
  />
</div>;

App.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    done: PropTypes.bool,
  })),
  handleAddTodo: PropTypes.func.isRequired,
};

export default App;
