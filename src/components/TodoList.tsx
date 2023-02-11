import React from 'react';
import {FilterType} from "../App";

type TodoListType = {
    title: string,
    tasks: Array<TasksType>
    removeTask: (id: number) => void
    setFilter: (filter: FilterType) => void
}

export type TasksType = {
    id: number,
    title: string,
    isDone: boolean
}

const TodoList = (props: TodoListType) => {
    const {tasks, title, removeTask, setFilter} = props

    return <div>
        <h3>{title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {tasks.map(task => {
                return <li key={task.id}>
                    <button onClick={() => removeTask(task.id)}>X</button>
                    <input type="checkbox" checked={task.isDone}/>
                    <span>{task.title}</span>
                </li>
            })}
        </ul>
        <div>
            <button onClick={()=>setFilter('all')}>All</button>
            <button onClick={()=>setFilter('active')}>Active</button>
            <button onClick={()=>setFilter('completed')}>Completed</button>
        </div>
    </div>
}
export default TodoList