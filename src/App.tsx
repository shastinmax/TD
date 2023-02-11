import React, {useState} from 'react';
import './App.css';
import TodoList, {TasksType} from "./components/TodoList";

export type FilterType = 'all' | 'completed' | 'active'

function App() {
    const [tasks, setTasks] = useState<Array<TasksType>>([
        {id: 1, title: "HTML&CSS", isDone: true},
        {id: 2, title: "JS", isDone: true},
        {id: 3, title: "ReactJS", isDone: false}
    ])

    const [filter, setFilter] = useState<FilterType>('all')

    const removeTask = (id: number) => {
        setTasks(tasks.filter(task => task.id !== id))
    }
    let filterTasks = tasks

    if (filter === 'active') {
        filterTasks = tasks.filter(task => !task.isDone)
    }
    if (filter === 'completed') {
        filterTasks = tasks.filter(task => task.isDone)
    }

    return (
        <div className="App">
            <TodoList title='Hello'
                      tasks={filterTasks}
                      removeTask={removeTask}
                      setFilter={setFilter}/>
        </div>
    );
}

export default App;
