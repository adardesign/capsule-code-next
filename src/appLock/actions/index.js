import { LOAD_TODOS, ADD_TODO, UPDATE_TODO, DELETE_TODO } from "../constants";
import createDb from "../db";

const dbInstance = () => createDb();

console.log("initial")
console.log(dbInstance)

export function loadTodos() {
  return async (dispatch) => {
    let db = await dbInstance();
    db.open().then(() => {
      console.log("DB loaded! :D");
      db.table("todos")
        .toArray()
        .then((todos, err) => {
          if(!todos || err) return alert("no records")
          dispatch({
            type: LOAD_TODOS,
            payload: todos,
          });
        });
    });
  };
}

export function addTodo(title) {
  return async (dispatch) => {
    const todoToAdd = { title, done: false };
    let db = await dbInstance();
    db.table("todos")
      .add(todoToAdd)
      .then((id, err) => {
        if(!id || err) return alert("cant save records")
        dispatch({
          type: ADD_TODO,
          payload: Object.assign({}, todoToAdd, { id }),
        });
      });
  };
}

export function deleteTodo(id) {
  return async (dispatch) => {
    let db = await dbInstance();
    db.table("todos")
      .delete(id)
      .then(() => {
        dispatch({
          type: DELETE_TODO,
          payload: id,
        });
      });
  };
}

export function updateTodo (id, done) {
  return async (dispatch) => {
    let db = await dbInstance();
    db.table("todos")
      .update(id, { done })
      .then(() => {
        dispatch({
          type: UPDATE_TODO,
          payload: { id, done },
        });
      });
  };
}
