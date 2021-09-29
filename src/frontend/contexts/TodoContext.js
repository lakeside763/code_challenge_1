import { createContext } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children, todo, onChangeTodoStatus, updateSubtask, addTodoSubtask }) => {
  return (
    <TodoContext.Provider
      value={todo, onChangeTodoStatus, updateSubtask, addTodoSubtask}
    >
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider };
