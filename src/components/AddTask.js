import { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [reps, setReps] = useState('');
    const [reminder, setReminder] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert('Please add task');
            return;
        }

        onAdd({ text, reps, reminder});

        setText('');
        setReps('');
        setReminder(false);
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input 
                    type='text' 
                    placeholder='Add Task' 
                    value={text}
                    onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Reps & Sets (Ex: 3x15)</label>
                <input 
                    type='text' 
                    placeholder='Add Reps' 
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}/>
            </div>
            <div className='form-control form-control-check'>
                <label>Set Reminder</label>
                <input 
                    type='checkbox'
                    checked={reminder} 
                    value={reminder}
                    onChange={(e) => setReminder(e.currentTarget.checked)}/>
            </div>

            <input 
                type='submit' 
                value='Save Task' 
                className='btn btn-block'/>
        </form>
    )
}

export default AddTask
