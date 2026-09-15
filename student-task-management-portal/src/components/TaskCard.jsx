import { Link } from "react-router-dom";

function TaskCard(props) {
    const statusClass = 
        props.status === "Completed" ? "status-completed" :
        props.status === "In Progress" ? "status-in-progress" :
        props.status === "Pending" ? "status-pending" : "status-to-do";

    return (
        <div className="task-card">
            <div className="task-info">
                <h3>{props.title}</h3>
                <p>{props.description}</p>
            </div>

            <p className={`status-pill ${statusClass}`}>{props.status}</p>
            <button className="btn-toggle" onClick={props.onToggle}>
                Change Status
            </button>
            <button className="btn-delete" onClick={props.onDelete}>
                Delete
            </button>
            <Link to={`/tasks/${props.id}`} className="view-detail-link">
                View Details
            </Link>
        </div>
    );
}

export default TaskCard;