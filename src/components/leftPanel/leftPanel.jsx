import { NavLink } from 'react-router-dom'
import { twitter, home, explore, notifications, messages, bookmarks, lists, profile, more } from './icons'
import './leftPanel.scss'

const LeftPanel = () => {
    return (
        <div className="left-panel">
            <div className="container">
                <header>{twitter}</header>
                <nav>
                    <NavLink to="/">
                        <span>{home} Home</span>
                    </NavLink>
                    <NavLink to="/explore">
                        <span>{explore} Explore</span>
                    </NavLink>
                    <NavLink to="/notifications">
                        <span>{notifications} Notifications</span>
                    </NavLink>
                    <NavLink to="/messages">
                        <span>{messages} Messages</span>
                    </NavLink>
                    <NavLink to="/bookmarks">
                        <span>{bookmarks} Bookmarks</span>
                    </NavLink>
                    <NavLink to="/lists">
                        <span>{lists} Lists</span>
                    </NavLink>
                    <NavLink to="/profile">
                        <span>{profile} Profile</span>
                    </NavLink>
                    <button className="more">
                        <span>{more} More</span>
                    </button>
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