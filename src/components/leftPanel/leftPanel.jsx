import { NavLink } from 'react-router-dom'
import './leftPanel.scss'

const LeftPanel = () => {
    return (
        <div className="left-panel">
            <div className="container">
                <header>Twitter icon here</header>
                <nav>
                    <NavLink to="/">
                        Home
                    </NavLink>
                    <NavLink to="/explore">
                        Explore
                    </NavLink>
                    <NavLink to="/notifications">
                        Notifications
                    </NavLink>
                    <NavLink to="/messages">
                        Messages
                    </NavLink>
                    <NavLink to="/bookmarks">
                        Bookmarks
                    </NavLink>
                    <NavLink to="/lists">
                        Lists
                    </NavLink>
                    <NavLink to="/profile">
                        Profile
                    </NavLink>
                </nav>
                <button className="tweet">Tweet</button>

                <footer>
                    <button className="account">
                        <div className="photo">
                        <img 
                        alt="Amir"
                        src="https://pbs.twimg.com/profile_images/1323881829762555904/4ewO6vY1_normal.jpg" 
                        />
                        </div>
                        <div>
                            <div className="name">Amir Mussa</div>
                            <div className="username">@amirmussa02</div>
                        </div>
                    </button>
                </footer> 
            </div>
        </div>
    )
}

export default LeftPanel