import Subtask from './Subtask';

const SubtaskList = ({ subtaskList, todo_id, updateSubtask }) => {
  
  const onChangeSubtaskStatus =(status, id) => (updateSubtask(status, id, todo_id));
  return (
    <>
        {subtaskList && subtaskList.map((subtask) => (
          <Subtask
            key={subtask.id}
            subtask={subtask}
            onChangeSubtaskStatus={(e) => {
              onChangeSubtaskStatus(e.target.checked, subtask.id)
            }}
          />
        ))}

    </>
  )
}

export default SubtaskList

