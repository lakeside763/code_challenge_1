import { useState } from 'react';
import { Flex, Box, Input, Button } from '@chakra-ui/react';


const SubtaskForm = ({ id: todo_id, addSubtask }) => {
  const [subtaskInfo, setSubtaskInfo] = useState({ todo_id, title: '' });

  const onTitleChange = (e) => {
    setSubtaskInfo({ ...subtaskInfo, [e.target.name]: e.target.value })
  }

  const onSubmitForm = (e) =>  {
    e.preventDefault();
    if (!subtaskInfo.title) return
    addSubtask(subtaskInfo);
    subtaskInfo.title = '';
  }

  return (
    <Box as="form" onSubmit={onSubmitForm}>
      <Flex mt="4">
        <Input as="input" placeholder="What are the steps" mr="4" _focus={{borderColor: "#ccc"}}
          onChange={onTitleChange} value={subtaskInfo.title} name="title"
        />
        <Button type="submit">New Step</Button>
      </Flex>
    </Box>
  )
}

export default SubtaskForm;
