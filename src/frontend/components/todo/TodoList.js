import { Box, Accordion } from '@chakra-ui/react';
import Todo from './Todo'
import TodoForm from './TodoForm';
import useTodoRequest from '../../hooks/useTodoRequest';

const TodoList = () => {
  const { todoList, addTodo, updateTodo, addTodoSubtask, updateSubtask } = useTodoRequest();

  return (
    <Box mt="4" mb="20" bg="#ffffff" pb="2" borderRadius="md">
      <TodoForm addTodo={addTodo} />
      <Accordion allowToggle mt="2">
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onChangeTodoStatus={(e) => {
              updateTodo(e.target.checked, todo.id)
            }}
            updateSubtask={updateSubtask}
            addTodoSubtask={addTodoSubtask}
          />
        ))}
      </Accordion>
    </Box>
  )
}


export default TodoList;
