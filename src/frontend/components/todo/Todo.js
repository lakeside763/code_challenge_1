import { memo, useContext } from "react";
import {
  AccordionItem, AccordionButton, Flex, Checkbox, Heading, AccordionIcon, Text, AccordionPanel,
} from "@chakra-ui/react"
import SubtaskList from "./SubtaskList";
import SubtaskForm from "./SubtaskForm";
import { TodoContext, TodoProvider } from "../../contexts/todoContext";


const Todo = memo(function Todo({ todo, onChangeTodoStatus, updateSubtask, addTodoSubtask }) {
  const addSubtask = (data) => (addTodoSubtask(data));
  return (
    <TodoProvider todo={todo}>
      <AccordionItem bg="#ffffff">
        <TodoHeader onChangeTodoStatus={onChangeTodoStatus} />
        <TodoSubtaskPanel updateSubtask={updateSubtask} addSubtask={addSubtask} />
      </AccordionItem>
    </TodoProvider>
  )
}, reRenderUpdatedTodo);

export default Todo;

function reRenderUpdatedTodo (prevProps, nextProps) {
  return (prevProps.todo === nextProps.todo)
}

const TodoSubtaskPanel = ({ updateSubtask, addSubtask }) => {
  const { id, subtask } = useContext(TodoContext);
  return (
    <AccordionPanel pb={4}>
      <Text fontSize="12px" fontWeight="medium" color="#ccc" mt="1">{`${subtask.length} step${subtask.length > 1 ? 's' : ''}`}</Text>
      <SubtaskList
        subtaskList={subtask}
        todo_id={id}
        updateSubtask={updateSubtask}
      />
      <SubtaskForm id={id} addSubtask={addSubtask} />
    </AccordionPanel>
  )
}


const TodoHeader = ({ onChangeTodoStatus }) => {
  const { title, status, subtask } = useContext(TodoContext);
  return (
    <h2 pb="2">
      <AccordionButton height="65px" _hover={{bg: "#925cfb", color: '#fff'}} _focus={{border: "none"}}>
        <Flex flex="1" textAlign="left">
          <Flex flexDir="row">
            <TodoCheckedBox
              disabled={subtask.length === 0 ? true : false}
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
  )
};

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





