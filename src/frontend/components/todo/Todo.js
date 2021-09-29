import { memo } from "react";
import {
  AccordionItem, AccordionButton, Flex, Checkbox, Heading, AccordionIcon, Text, AccordionPanel,
} from "@chakra-ui/react"
import SubtaskList from "./SubtaskList";
import SubtaskForm from "./SubtaskForm";


const TodoCheckedBox = ({ status, onChangeTodoStatus, disabled }) => {
  return (
    <Checkbox
      isDisabled={disabled}
      isChecked={status}
      value={status}
      onChange={onChangeTodoStatus}
    ></Checkbox>
  )
}


const Todo = memo(function Todo({ todo, onChangeTodoStatus, updateSubtask, addTodoSubtask }) {
  const { id, title, status, subtask } = todo;

  const addSubtask = (data) => (addTodoSubtask(data));

  return (
    <AccordionItem bg="#ffffff">
      <h2 pb="2">
        <AccordionButton height="65px" _hover={{bg: "#925cfb", color: '#fff'}} _focus={{border: "none"}}>
          <Flex flex="1" textAlign="left">
            <Flex flexDir="row">
              <TodoCheckedBox
                disabled={todo.subtask.length === 0 ? true : false}
                status={status}
                onChangeTodoStatus={onChangeTodoStatus}
              />
              <Heading fontSize="xl" fontWeight="normal" ml="4">{title}</Heading>
            </Flex>
          </Flex>
          <Flex flexDir="column" alignItems="flex-end">
            <AccordionIcon />
            <Text align="right" fontSize="13px">
              {`${(subtask.filter((t) => t.status === true)).length === 0 ? ''
              : `${(subtask.filter((t) => t.status === true)).length} of ${subtask.length} Completed`}`}
            </Text>
          </Flex>
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
        <Text fontSize="12px" fontWeight="medium" color="#ccc" mt="1">{`${subtask.length} step${subtask.length > 1 ? 's' : ''}`}</Text>
        <SubtaskList
          subtaskList={subtask}
          todo_id={id}
          updateSubtask={updateSubtask}
        />
        <SubtaskForm id={id} addSubtask={addSubtask} />
      </AccordionPanel>
    </AccordionItem>
  )
}, reRenderUpdatedTodo);

export default Todo;

function reRenderUpdatedTodo (prevProps, nextProps) {
  return (prevProps.todo === nextProps.todo)
}






