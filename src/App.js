import db from './firebase.config';

import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import Footer from "./components/Footer";
import About from "./components/About";

function App() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  // initial load
  useEffect(() => {
   const getTasks = async () => {
     const tasksFromServer = await fetchTasks();

     tasksFromServer.docs.forEach(item => {
      setTasks(t => ([...t, item.data()]));
     })
   }

    getTasks();
  }, []);

  /** Server Calls */
  // Fetch Tasks
  const fetchTasks = async () => {
    const res = db.collection('tasks').orderBy('isComplete', 'asc');
    const data = await res.get();
  
    return data;
  };

  // Add Task
  const addTask = (task) => {
	db.collection('tasks')
	.add(task)
	.then(() => {
		console.log('Task Added Successfully');
	})
	.catch((error) => {
		console.error('Error adding task: ', error);
	});

	// update tasks state
	setTasks([...tasks, task]);
  }

  // Delete Task
  const deleteTask = (task) => {
    // get id of task
    db.collection('tasks').get().then((x) => {
      x.docs.forEach(item => {
       const data = item.data();
       const id = item.id;

        if (id && data.text === task.text) {
            // make delete request
    		db.collection('tasks')
    		  .doc(id)
			  .delete()
			  .then(() => {
       			console.log('Task deleted successfully!');
     		}).catch((error) => {
       			console.error('Error removing task: ', error);
    		});

        	//update state of tasks
			setTasks(tasks.filter((task) => task.text !== data.text))
        	}	 
    	})
  	})
  }

  // Toggle Reminder
  const toggleReminder = (task) => {
    db.collection('tasks').get().then((x) => {
        x.docs.forEach(item => {
         const data = item.data();
         const id = item.id;

          if (id && data.text === task.text) {
            const currentTask = data;

            //update the task in firestore
            db.collection('tasks').doc(id).update({isComplete: !currentTask.isComplete});
          
            //update state of tasks
            setTasks(tasks
            	.map(task => task.text === data.text ? { ...task, isComplete: !currentTask.isComplete } : task))
          } 
      })
    }).catch((error) => console.log("Error getting task:", error));
  }
  /** End Server Calls */

  return (
    <Router>
       <div className="container">
      <Header 
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}/>

        <Route 
          path='/react-task-tracker/' 
          exact render={(props) => (
        <>
          {showAddTask && <AddTask onAdd={addTask}/>}
     
          {tasks.length > 0 ? 
            <Tasks 
              tasks={tasks} 
              onToggle={toggleReminder} 
              onDelete={deleteTask}/> : 
              'No Tasks Available'}
          </>)
        } />
          
        <Route path='/react-task-tracker/about' component={About}/>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
