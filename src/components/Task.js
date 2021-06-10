import { FaTimes } from 'react-icons/fa';

const Task = ({task, onDelete, onToggle }) => {
    return (
        <div 
            title="Double tap to toggle task status"
            className={`task ${task.isComplete ? 'isComplete' : ''}`} 
            onDoubleClick={() => onToggle(task)}
        >
            <h3>
                {task.text} 
                <FaTimes 
                    style={{ color: 'red', cursor: 'pointer'}} 
                    onClick={() => onDelete(task)}
                />
            </h3>
            <p>{task.reps}</p>
        </div>
    )
}

export default Task
