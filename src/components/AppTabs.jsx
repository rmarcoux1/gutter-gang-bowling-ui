import { NavLink } from 'react-router-dom'

export default function AppTabs() {
    return (
        <div className="tabs">
            <NavLink
                to="/"
                end
                className={({ isActive }) => `tab ${isActive ? 'active' : ''}`}
            >
                Dashboard
            </NavLink>

            <NavLink
                to="/entry"
                className={({ isActive }) => `tab ${isActive ? 'active' : ''}`}
            >
                Enter Scores
            </NavLink>
        </div>
    )
}
