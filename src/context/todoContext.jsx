import React, { createContext, useEffect, useState } from 'react';

export const TaskListContext = createContext({})

export function TaskListProvider({children}) {
    const [tasks, setTasks] = useState(localStorage.getItem('tasks')
        ? JSON.parse(localStorage.getItem('tasks'))
        : []
    )

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])

    function onNewTask(taskName) {
        const newTask = {
            taskId: Date.now(),
            name: taskName,
            status: "notStarted",
            createdAt: Date.now()
        }

        setTasks((prevTasks) => [...prevTasks, newTask])
    }

    function onDeleteTask(taskId) {
        setTasks(() => tasks.filter(task => task.taskId !== taskId))
    }

    function onChangeTaskStatus(taskId, newStatus) {
        const newTasks = tasks.map(task => {
            return task.taskId === taskId ? { ...task, status: newStatus } : task
        })
        setTasks(newTasks)
    }

    return <TaskListContext.Provider value={{
        tasks,
        onNewTask,
        onDeleteTask,
        onChangeTaskStatus
    }}>
        {children}
    </TaskListContext.Provider>
};