import {
  LOAD_TODOS,
  ADD_TODO,
  UPDATE_TODO,
  DELETE_TODO,
} from '../constants';

export default function (state, { type, payload }) {
  switch (type) {
    case LOAD_TODOS: return { todos: payload };
    case ADD_TODO: return { todos: [payload, ...state.todos] };
    default: return state;
  }
}
