import { Link } from "react-router-dom";

function Tasks(props) {
    const tasks = props.tasks || [];

    return (
        <div className="tasks-page-container">
            <div className="tasks-page-header">
                <div>
                    <h1>All Tasks</h1>
                    <p className="tasks-subtitle">Overview of your ongoing and completed assignments</p>
                </div>
                <span className="tasks-count-pill">
                    {tasks.length} {tasks.length === 1 ? "task" : "tasks"}
                </span>
            </div>

            {tasks.length === 0 ? (
                <div className="empty-tasks-state">
                    <div className="empty-icon">📋</div>
                    <h3>No tasks found</h3>
                    <p>Your task list is empty. Add a new task from the dashboard to get started.</p>
                    <Link to="/" className="btn-primary">Go to Dashboard</Link>
                </div>
            ) : (
                <div className="tasks-grid">
                    {tasks.map((task) => {
                        const statusClass = 
                            task.status === "Completed" ? "status-completed" :
                            task.status === "In Progress" ? "status-in-progress" :
                            task.status === "Pending" ? "status-pending" : "status-to-do";

                        return (
                            <div key={task.id} className="task-grid-card">
                                <div>
                                    <div className="task-grid-header">
                                        <span className="task-id-tag">#{task.id}</span>
                                        <span className={`status-pill ${statusClass}`}>{task.status}</span>
                                    </div>
                                    <h3>{task.title}</h3>
                                    <p className="task-grid-desc">{task.description}</p>
                                </div>
                                <div className="task-grid-footer">
                                    <Link to={`/tasks/${task.id}`} className="view-detail-link">
                                        View Details &rarr;
                                    </Link>
                                </div>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}

export default Tasks;