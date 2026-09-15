import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <h2>Student Task Portal</h2>

            <div className="nav-links">
                <NavLink to="/" end>Dashboard</NavLink>
                <NavLink to="/tasks">Tasks</NavLink>
            </div>
        </nav>
    );
}

export default Navbar;