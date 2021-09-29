import { createContext } from "react";

const TodoContext = createContext();

const TodoProvider = ({ children, todo }) => {
  return (
    <TodoContext.Provider value={todo}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider };
