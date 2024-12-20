import React, { useState } from "react";
import { useReducer } from "react";
import Todo from "./Todo.jsx";

export const ACTIONS = {
  ADD_TODO: "add_todo",
  TOGGLE_TODO: "toggle_todo",
  DELETE_TODO: "delete_todo",
};

function reducer(todos, action) {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [...todos, newTodo(action.payload.name)]
    case ACTIONS.TOGGLE_TODO:
      return todos.map((todo) => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    case ACTIONS.DELETE_TODO:
      return todos.filter((todo) => todo.id !== action.payload.id);
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

function newTodo(name) {
  return {
    id: Date.now(),
    name: name,
    completed: false,
  };
}

const Comp1useReducer = () => {
  const [todos, dispatch] = useReducer(reducer, []);
  const [name, setName] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    dispatch({ type: ACTIONS.ADD_TODO, payload: { name: name } });
    setName("");
  }
  console.log(todos);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </form>
      {todos.map((todo) => {
        return <Todo key={todo.id} todo={todo} dispatch={dispatch} />;
      })}
    </div>
  );
};

export default Comp1useReducer;
