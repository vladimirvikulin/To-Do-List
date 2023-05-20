import React,{useState} from 'react';
import MyButton from '../ui/button/MyButton';
import MyInput from '../ui/input/MyInput';
import styles from './Task.module.css';

const Task = (props) => {
   const [priority, setPriority] = useState(false);
    const priorityTask = () => {
      props.task.priority = !props.task.priority;
      setPriority(props.task.priority)
    }
    return (
        <div className={props.task.priority ? `${styles.priorityTask} ${styles.task}` : styles.task}>
        {
            props.edit === props.task.id ? 
            <div>
               <MyInput 
                  value = {props.value} 
                  onChange = {e => props.setValue(e.target.value)} 
                  type = 'text' 
                  placeholder = 'Назва задачі'
               />
            </div>
            : 
            <div className={!props.task.status ? styles.close : ''}>
               <MyButton onClick={() => priorityTask()}>
                  Пріорітет
               </MyButton>    
               {props.number}. {props.task.title}
            </div>
        }
        {
        props.edit === props.task.id ? 
            <div>
               <MyButton onClick={() => props.saveTask(props.task)}>
                  Зберегти
               </MyButton>
            </div>
            :
            <div>
               <MyButton onClick={() => props.editTask(props.task)}>
                  Змінити
               </MyButton>
               <MyButton onClick={() => props.removeTask(props.task)}>
                  Видалити
               </MyButton>
               <MyButton onClick={() => props.statusTask(props.task)}>
                  {
                     props.task.status ? 'Закрити' : 'Відкрити'
                  }
               </MyButton>
            </div>
        }
    </div>
    );
};

export default Task;