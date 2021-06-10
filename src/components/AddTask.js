import { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState('');
    const [reps, setReps] = useState('');
    const [isComplete, setComplete] = useState(false);
    const onSubmit = (e) => {
        e.preventDefault();

        if(!text) {
            alert('Please add task');
            return;
        }

        onAdd({ text, reps, isComplete});

        setText('');
        setReps('');
        setComplete(false);
    }
    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Task</label>
                <input 
                    type='text' 
                    placeholder='Sumo Deadlifts' 
                    value={text}
                    onChange={(e) => setText(e.target.value)}/>
            </div>
            <div className='form-control'>
                <label>Reps & Sets</label>
                <input 
                    type='text' 
                    placeholder='3 x 15' 
                    value={reps}
                    onChange={(e) => setReps(e.target.value)}/>
            </div>

            <input 
                type='submit' 
                value='Save Task' 
                className='btn btn-block'/>
        </form>
    )
}

export default AddTask
