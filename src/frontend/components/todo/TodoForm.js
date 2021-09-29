import {
  Box, Flex, Input, Button, Text,
} from '@chakra-ui/react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers';
import * as Yup from 'yup';

const TodoForm = ({ addTodo }) => {
  const schema = Yup.object({
    title: Yup.string().required('Todo title is required'),
  });

  const { register, handleSubmit, errors, formState: { isValid } } = useForm({
    mode: 'onTouched',
    resolver: yupResolver(schema),
    defaultValues: {
      title: '',
    }
  })

  const onSubmitForm = (data) => {
    addTodo(data);
  }

  return (
    <>
      <Box as="form" onSubmit={handleSubmit(onSubmitForm)} px="4">
        <Flex flexDir="row"  mt="5">
          <Input as="input" h="50px" w="65%" fontSize="larger" borderColor="#e2e3f7" borderWidth="2.5px"
            _focus={{borderColor: "#03ef62"}} _hover={{borderColor: "#e2e3f7", opacity: ".8"}}
            style={{borderRight: "none", borderRadius: "5px 0 0 5px"}}
            name="title" type="text" ref={register} placeholder="Add new todo"
          />
          <Button type="submit" w="35%" h="50px" bg="#03ef62"
            style={{borderRadius: "0 5px 5px 0"}} _hover={{bg: "#925cfb", color: "#ffffff"}}
            _focus={{border: "none"}} _active={{bg: "#03ef62", color: "#000"}}
          >Add New</Button>
        </Flex>
        {errors?.title && <Text as="span" color="red" fontSize="12px">{errors.title.message}</Text>}
      </Box>
    </>

  )
}

export default TodoForm;
