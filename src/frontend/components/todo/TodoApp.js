import { Box, Stack, Heading, Container, Flex } from '@chakra-ui/react';
import { useContext } from 'react';
import TodoContext from '../../contexts/TodoContext';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

const TodoApp = () => {
  const {todoList, setTodoList} = useContext(TodoContext);

  const addTodo = async (data) => {
    const createTodo = await fetch('http://localhost:5000/todo', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(data),
    });
    const todo = await createTodo.json();
    setTodoList([todo, ...todoList]);
  }

  return (
    <Stack as="main" align="flex-start">
      <Container maxW="container.sm">
        <Flex flexDir="column" justifyContent="flex-start" minH="100vh">
          <Heading as="h1" fontSize="4xl" fontWeight="normal" textAlign="center" mt="12">Todo App</Heading>

          <TodoForm addTodo={addTodo} />
          <TodoList />

        </Flex>
      </Container>
    </Stack>
  )
}

export default TodoApp;
