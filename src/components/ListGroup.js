import React, { useState } from 'react';
import AddTaskForm from './AddTaskForm';
import { Link } from "react-router-dom";
import Task from './Task';

const ListGroup = ({group, removeGroup, addCompleted, addNotCompleted}) => {
    const [tasks, setTasks] = useState ([])
    const [edit, setEdit] = useState(null)
    const [value, setValue] = useState('')

    const checkCompleted = () => {
        let completed = 0
        let notCompleted = 0
        tasks.map((i) => i.status ? ++notCompleted : ++completed)
        addCompleted(completed)
        addNotCompleted(notCompleted)
    }
    
    const addTask = (newTask) => {
        setTasks([...tasks, newTask])
    }
    
    const removeTask = (task) => {
        setTasks(tasks.filter(i => i.id !== task.id))
    }
    
    const statusTask = (task) => {
        setTasks(tasks.filter( i => {
            if (i.id === task.id) i.status = !i.status
            return i
          }
        ))
    }
    const editTask = (task) => {
        setEdit(task.id)
        setValue(task.title)
       }
    
    const saveTask = (task) => {
        setTasks(tasks.filter( i => {
          if (i.id === task.id) i.title = value
          setEdit(null)
          setValue('')
          return i
        }
      ))
    }
    return (
        <div>
            <div className='link'>
              <Link onClick={checkCompleted} to='/statistics'>Статистика</Link>
            </div>
            <h1 className="list">{group.title}</h1>
            <AddTaskForm add={addTask}/>
            <button onClick={() => removeGroup(group)}>
                  Видалити групу
               </button>
            {tasks.length ? 
                <div>
                {tasks.map((task, index) => <Task 
                removeTask={removeTask} statusTask={statusTask} edit={edit} editTask={editTask} value={value} setValue={setValue} saveTask={saveTask}
                number={index + 1} task={task} key={task.id}/>)}
                 </div>
                : <h1 className="list">Список задач порожній</h1>
            }
        </div>
    );
};

export default ListGroup;