import { Text, Flex, Checkbox, Input, Button } from '@chakra-ui/react';

const Subtask = ({ subtask, onChangeSubtaskStatus }) => {
  const {title, status} = subtask;
  return (
    <>
      <Flex mt="6">
        <Checkbox
          isChecked={status}
          value={status}
          onChange={onChangeSubtaskStatus}
        ></Checkbox>
        <Text ml="2">{title}</Text>
      </Flex>
    </>
  )
}

export default Subtask;

