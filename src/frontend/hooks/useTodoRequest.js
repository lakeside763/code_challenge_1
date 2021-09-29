import { useState, useEffect } from "react";


const useTodoRequest = () => {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/todo');
      const todoList = await response.json();
      const todos = todoList.map((todo) => {
        const status = todo.status === 'COMPLETED' ?  true : false;
        const { subtask: subtaskList } = todo;
        const subtask = mapSubtaskStatus(subtaskList);
        return { ...todo, status, subtask };
      });
      setTodoList(todos);
    }
    fetchData();
  }, []);

  const mapSubtaskStatus = (subtaskList) => {
    return subtaskList.map((task) => {
      const taskStatus = task.status === 'COMPLETED' ? { ...task, status: true } : { ...task, status: false } ;
      return taskStatus;
    });
  }

  const addTodo = async (data) => {
    const addTodo = await addTodoRequest(data);
    if (addTodo) {
      const todo = { ...addTodo, status: addTodo.status === 'COMPLETED' ? true: false };
      setTodoList([todo, ...todoList]);
    }
  }

  const addTodoRequest = async (data) => {
    try {
      const createTodo = await fetch('http://localhost:5000/todo', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(data),
      });
      return createTodo.json();
    } catch (error) {
      return error.message;
    }
  }

  const updateTodo = async (status, id) => {
    const updateTodo = await updateTodoRequest(status, id);
    if (updateTodo) {
      const todo = todoList.find((item) => item.id === id);
      const { subtask: subtaskList } = todo;
      const subtask = subtaskList.map((task) => ({ ...task, status }));
      const updatedTodoItem = {  ...todo, status: !todo.status, subtask }
      const newTodoList = todoList.map((item) => item.id === id ? updatedTodoItem : item);
      setTodoList(newTodoList);
    }
  }

  const updateTodoRequest = async (status, id) => {
    try {
      const updateTodo = await fetch('http://localhost:5000/todo', {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ id, status: status === true ? 'COMPLETED' : 'PENDING' }),
      });
      return updateTodo.json();
    } catch (error) {
      return error;
    }
  }

  const addTodoSubtask = async (data) => {
    const addTodoSubtask = await addTodoSubtaskRequest(data);
    if (addTodoSubtask) {
      console.log(addTodoSubtask);
      const todo = todoList.find((item) => item.id === data.todo_id);
      const { subtask: subtaskList } = addTodoSubtask;
      const subtask = mapSubtaskStatus(subtaskList);
      console.log(subtask);
      const updatedTodoItem = { ...todo, status: false, subtask }
      const newTodoList = todoList.map((item) => item.id === data.todo_id ? updatedTodoItem : item);
      setTodoList(newTodoList);
    }
  }

  const addTodoSubtaskRequest = async ({ todo_id, title }) => {
    try {
      const createSubtask = await fetch('http://localhost:5000/todo/subtask', {
        method: 'POST',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ todo_id, title }),
      });
      return createSubtask.json();
    } catch (error) {
      return error
    }
  }

  const updateSubtask = async (status, id, todo_id) => {
    const updateSubtask = await updateSubtaskRequest(status, id);
    if (updateSubtask) {
      const todo = todoList.find((item) => item.id === todo_id);
      const { subtask: subtaskList } = todo;
      const subtask = subtaskList.find((task) => task.id === id)
      const updatedSubtask = { ...subtask, status: !subtask.status };
      const newSubtaskList = subtaskList.map((task) => task.id === id ? updatedSubtask : task);
      const pendingSubtasks = newSubtaskList.filter((task) => task.status === false);
      const updatedTodoItem = {
        ...todo,
        status: pendingSubtasks.length > 0 ? false : true,
        subtask: newSubtaskList
      };
      const newTodoList = todoList.map((item) => item.id === todo_id ? updatedTodoItem : item);
      setTodoList(newTodoList);
    }
  }

  const updateSubtaskRequest = async (status, id) => {
    try {
      const updateSubtask = await fetch('http://localhost:5000/todo/subtask', {
        method: 'PUT',
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({ id, status: status === true ? 'COMPLETED' : 'PENDING' }),
      });
      return updateSubtask.json();
    } catch (error) {
      return error.message
    }
  }

  return {
    todoList,
    setTodoList,
    addTodo,
    updateTodo,
    addTodoSubtask,
    updateSubtask
  };
}

export default useTodoRequest;

