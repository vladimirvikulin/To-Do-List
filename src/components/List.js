import React from 'react';
import Task from './Task';

const List = ({title, tasks}) => {
    return (
        <div>
            <h1 className="list">{title}</h1>
            {tasks.map(task => <Task task={task} key={task.id}/>)}
        </div>
    );
};

export default List;