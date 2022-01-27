import React, { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { TodoItem, TodoListWrapper, StatusMark } from "./style";
import { TaskListContext } from "../../context/todoContext";
import { P } from '../style/elements/Typography/style'
import Button from '../Button'
import { SimpleButton } from '../Button/style'

export default function index() {

  const { tasks, onDeleteTask, onChangeTaskStatus } = useContext(TaskListContext)

  return <TodoListWrapper>
     {tasks.map(task => <TodoItem key={task.createdAt}>
       <StatusMark status={task.status}/>
       <P>{task.name}</P>
       <Button type="button" styleType="warning" cb={{onClick: e => onChangeTaskStatus(task.taskId, "inProgress")}}>Em andamento</Button>
       <Button type="button" styleType="success" cb={{onClick: e => onChangeTaskStatus(task.taskId, "completed")}}>Completar</Button>
       <SimpleButton onClick={e => onDeleteTask(task.taskId)}><MdDelete/></SimpleButton>
     </TodoItem>)}
  </TodoListWrapper>;
}