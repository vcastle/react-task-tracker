import Task from './Task';

const Tasks = ({tasks, onDelete, onToggle}) => {
   
  return (
    <>
    <h1 style={{color: 'grey', fontSize: '14px', textAlign:'center'}}>Double tap to toggle completed task</h1>
    <ul>
         {tasks.map((task, index) => (
            <Task 
                key={index} 
                task={task} 
                onDelete={onDelete}
                onToggle={onToggle}
            />
        ))}
    </ul>
    </>
  );
};

export default Tasks;
