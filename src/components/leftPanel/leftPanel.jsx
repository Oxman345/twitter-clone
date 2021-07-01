import { NavLink } from 'react-router-dom'
import { twitter, home, explore, notifications, messages, bookmarks, lists, profile, more, options } from './icons'
import './leftPanel.scss'

const LeftPanel = () => {
    return (
        <div className="left-panel">
            <div className="container">
                <header>{twitter}</header>
                <nav>
                    <NavLink to="/" exact activeClassName="selected">
                        <span>{home} Home</span>
                    </NavLink>
                    <NavLink to="/explore" activeClassName="selected">
                        <span>{explore} Explore</span>
                    </NavLink>
                    <NavLink to="/notifications" activeClassName="selected">
                        <span>{notifications} Notifications</span>
                    </NavLink>
                    <NavLink to="/messages" activeClassName="selected">
                        <span>{messages} Messages</span>
                    </NavLink>
                    <NavLink to="/bookmarks" activeClassName="selected">
                        <span>{bookmarks} Bookmarks</span>
                    </NavLink>
                    <NavLink to="/lists" activeClassName="selected">
                        <span>{lists} Lists</span>
                    </NavLink>
                    <NavLink to="/profile" activeClassName="selected">
                        <span>{profile} Profile</span>
                    </NavLink>
                    <button className="more" activeClassName="selected">
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
                            <div className="name">Amir</div>
                            <div className="username">@amirmussa02</div>
                        </div>
                        <div>
                        <button className="options">{options}</button>
                        </div>
                    </button>
                </footer> 
            </div>
        </div>
    )
}

export default LeftPanel