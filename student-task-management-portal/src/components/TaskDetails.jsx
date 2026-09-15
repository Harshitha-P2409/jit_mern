import { useParams, Link } from "react-router-dom";

function TaskDetails(props) {
    const { id } = useParams();
    const tasks = props.tasks || [];
    const task = tasks.find(
        (t) => String(t.id) === String(id)
    );

    if (!task) {
        return (
            <div className="task-details-container">
                <div className="task-details-card not-found-card">
                    <h2>Task Not Found</h2>
                    <p>The task you are looking for does not exist or has been removed.</p>
                    <div className="not-found-actions">
                        <Link to="/" className="btn-primary">Back to Dashboard</Link>
                        <Link to="/tasks" className="back-link">Browse All Tasks</Link>
                    </div>
                </div>
            </div>
        );
    }

    const statusClass = 
        task.status === "Completed" ? "status-completed" :
        task.status === "In Progress" ? "status-in-progress" :
        task.status === "Pending" ? "status-pending" : "status-to-do";

    return (
        <div className="task-details-container">
            <div className="task-details-nav">
                <Link to="/tasks" className="back-link">&larr; Back to Tasks</Link>
                <span className="task-id-badge">TASK #{task.id}</span>
            </div>

            <div className="task-details-card">
                <div className="task-details-header">
                    <span className={`status-pill ${statusClass}`}>{task.status}</span>
                </div>

                <h1 className="task-details-title">{task.title}</h1>

                <div className="task-details-section">
                    <p className="section-label">Description</p>
                    <p className="task-details-desc">{task.description}</p>
                </div>

                <div className="task-details-meta">
                    <div className="meta-card">
                        <span className="meta-label">Status</span>
                        <span className="meta-value">{task.status}</span>
                    </div>
                    <div className="meta-card">
                        <span className="meta-label">Task ID</span>
                        <span className="meta-value">#{task.id}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TaskDetails;