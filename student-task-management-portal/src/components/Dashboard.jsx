import StatCard from "./StatCard";
import TaskCard from "./TaskCard";

function Dashboard() {
    const tasks = [
        { title: "Learn React", description: "Understanding Components", status: "In Progress" },
        { title: "Build a Project", description: "Create a simple React app", status: "To Do" },
        { title: "Deploy App", description: "Host the app on a platform", status: "Completed" },
        { title: "Write Tests", description: "Ensure app functionality", status: "To Do" },
    ];
    return (
        <main>
            <h2><center>Dashboard:</center></h2>
            <div className="stats-container">
                <StatCard title={"Total Tasks"} value={10} />
        <StatCard title={"Completed Tasks"} value={7} />
        <StatCard title={"Pending Tasks"} value={3} />
        <StatCard title={"Overdue Tasks"} value={1} />      
            </div>

            <h2>Recent Tasks</h2>

            <div className="tasks-container">
                {tasks.map((task) => (
                    <TaskCard title={task.title} description={task.description} status={task.status} />
                ))}
            </div>

        </main>
    );
}

export default Dashboard;