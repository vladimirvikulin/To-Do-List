import React from 'react';

const Task = (props) => {
    return (
     <div className="task">
         <div>
            {props.number}. {props.task.title}
         </div>
         <div>
            <button>Змінити</button>
            <button>Видалити</button>
            <button>Закрити</button>
         </div>
    </div>
    );
};

export default Task;