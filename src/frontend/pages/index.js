import Head from 'next/head'
import { Box, Stack, Heading, Container, Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import TodoForm from '../components/todo/TodoForm';
import TodoList from '../components/todo/TodoList';

export default function Home() {
  const [todoList, setTodoList] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:5000/todo');
      const todoList = await response.json();
      setTodoList(todoList);
    }
    fetchData();
  }, []);

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
    <Box bg="#05192d">
      <Head>
        <title>Todo App</title>
        <meta name="description" content="oozou todo app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Stack as="main" align="flex-start">
        <Container maxW="container.sm">
          <Flex flexDir="column" justifyContent="flex-start" minH="100vh">
            <Heading as="h4" fontSize="4xl" fontWeight="bold" textAlign="center" mt="12" color="#03ef62">Todo List</Heading>

            <TodoList />

          </Flex>
        </Container>
      </Stack>
    </Box>
  )
}


