import StatCard from "./StatCard";
import TaskCard from "./TaskCard";
import AddTask from "./AddTask";
import { useState } from "react";


function Dashboard() {
    const[tasks, setTasks] = useState([
        { id: 1, title: "Learn React", description: "Understanding Components", status: "In Progress" },
        { id: 2, title: "Build a Project", description: "Create a simple React app", status: "To Do" },
        { id: 3, title: "Deploy App", description: "Host the app on a platform", status: "Completed" },
        { id: 4, title: "Write Tests", description: "Ensure app functionality", status: "To Do" },
    ]);

   function toggleTask(id)
  {
    setTasks(
      tasks.map((task) => {
        if(task.id === id){
          return{...task,status:task.status === "Completed"?"To Do":(task.status === "To Do"?"In Progress":(task.status === "In Progress"?"Completed":"To Do"))}
        }
        return task;
      })
    );
  }

 function deleteTask(id) {
        setTasks(tasks.filter(task => task.id !== id));
    }

  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }
 
    return (
        <main>
            <div className="stats-container">
                <StatCard title={"Total Tasks"} value={10} />
        <StatCard title={"Completed Tasks"} value={7} />
        <StatCard title={"Pending Tasks"} value={3} />
        <StatCard title={"Overdue Tasks"} value={1} />      
            </div>
<AddTask onAddTask={addTask} />

            <h2>Recent Tasks</h2>

            <div className="tasks-container">
                {tasks.map((task) => (
                    <TaskCard key={task.id} title={task.title} description={task.description} status={task.status}
                    onToggle={() => toggleTask(task.id)} onDelete={() => deleteTask(task.id)} />
                ))}
            </div>

        </main>
    );
}

export default Dashboard;