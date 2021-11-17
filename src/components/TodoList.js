import React from "react";
import Todo from "./Todo";

export const TodoList = ({ todos, setTodos, filteredTodos, filterHandler }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filteredTodos.map((todo) => (
            <Todo
              key={todo.id}
              text={todo.text}
              todos={todos}
              setTodos={setTodos}
              todo={todo}
            />
          ))}
      </ul>
    </div>
  );
};
