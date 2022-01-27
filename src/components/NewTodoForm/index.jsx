import { useState, useContext } from 'react'
import { NewTaskForm } from './style'
import { TaskListContext } from '../../context/todoContext'
import InputWrapper from '../InputWrapper'
import Button from '../Button'

export default function index() {
    const { onNewTask } = useContext(TaskListContext)
    const [name, setName] = useState("")

    function handleSubmit(e) {
        e.preventDefault()
        onNewTask(name)
        setName("")
    }

    return <NewTaskForm onSubmit={handleSubmit}>
        <InputWrapper id="taskName" name="taskName" value={name} label="Todo name:" autoComplete="off" isRequired={true} cb={{onChange: e => setName(e.target.value)}}/>
        <Button type="submit" styleType="active">Create</Button>
    </NewTaskForm>
} 