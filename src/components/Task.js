import { FaCheck, FaTimes } from 'react-icons/fa';

const Task = ({task, onDelete, onToggle }) => {
    return (
        <li
            title="Double tap to toggle task status"
            className={`task ${task.isComplete ? 'isComplete' : ''}`} 
            onDoubleClick={() => onToggle(task)}>
            <h3>
                {task.text} 

                <div className="task__actions">
                <FaTimes 
                    style={{ color: 'red', cursor: 'pointer'}} 
                    onClick={() => onDelete(task)}/>

                <FaCheck
                    className={`${task.isComplete ? 'hide': ''}`}
                    style={{ color: 'green', cursor: 'pointer', marginLeft: '11px'}} 
                    onClick={() => onToggle(task)}/> 
                </div>
              
            </h3>
            <p>{task.reps}</p>
        </li>
    )
}

export default Task
