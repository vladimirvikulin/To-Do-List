import React, { useState } from 'react';
import AddTaskForm from '../AddTaskForm';
import { Link } from "react-router-dom";
import Task from '../Task/Task';
import MyButton from '../ui/button/MyButton';
import styles from './Group.module.css';
import MyModal from '../ui/modal/MyModal';
import { useDispatch } from 'react-redux';
import { fetchDeleteTask, fetchUpdateTask } from '../../redux/slices/groups';

const ListGroup = ({
  group, 
  groups, 
  setGroups, 
  removeGroup, 
}) => {
    const groupId = group._id;
    const dispatch = useDispatch();
    const [edit, setEdit] = useState(null);
    const [value, setValue] = useState('');
    const [modalTaskVisible, setModalTaskVisible] = useState(false);
    const checkCompleted = () => {
        let completed = 0;
        let notCompleted = 0;
        group.tasks.map((i) => i.status ? ++notCompleted : ++completed);
    }
    
    const removeTask = (task) => {
        const taskId = task._id
        dispatch(fetchDeleteTask({groupId, taskId}));
    }
    
    const statusTask = (task) => {
        const updatedTask = {
            ...task,
            status: !task.status
          };
        const taskId = task._id
        dispatch(fetchUpdateTask({updatedTask, groupId, taskId}));
    }

    const editTask = (task) => {
        setEdit(task.id);
        setValue(task.title);
    }
    
    const saveTask = (task) => {
        group.tasks.filter( i => {
            if (i.id === task.id) i.title = value;
            setEdit(null);
            setValue('');
            return i;
        }
        )
        setGroups([...groups]);
    }
    return (
        <div>
            <h1 className={styles.groupHeader}>{group.title}</h1>
            <MyButton onClick={() => setModalTaskVisible(true)}>
                Створити задачу
            </MyButton>
            <MyModal visible={modalTaskVisible} setVisible={setModalTaskVisible}>
                <AddTaskForm id={group._id} setVisible={setModalTaskVisible} />
            </MyModal>
            <MyButton onClick={() => removeGroup(group)}>
                  Видалити групу
            </MyButton>
            {group.tasks.length ? 
                <div>
                {group.tasks.map((task, index) => <Task 
                removeTask={removeTask} statusTask={statusTask} edit={edit} editTask={editTask} value={value} setValue={setValue} saveTask={saveTask}
                number={index + 1} task={task} key={task._id}/>)}
                 </div>
                : <h1 className={styles.groupHeader}>Список задач порожній</h1>
            }
            <div>
                <Link to='/statistics'>
                    <MyButton onClick={checkCompleted} >Статистика</MyButton>
                </Link>
            </div>
        </div>
    );
};

export default ListGroup;