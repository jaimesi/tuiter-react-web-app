import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = (paths[2]) ? paths[2] : 'home';

    return (
        <div className="list-group">
            <a className="list-group-item"><i className="bi bi-twitter pe-2"></i></a>
            <Link to="/tuiter/home/" className={`list-group-item
                    ${active === 'home'?'active':''}`}>
                <i className="bi bi-house-fill pe-2"></i>
                <div className="d-none d-xl-inline">
                    Home
                </div>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}>
                <i className="bi bi-hash pe-2"></i>
                <div className="d-none d-xl-inline">
                    Explore
                </div>
            </Link>
            <Link to="/" className="list-group-item">
                <i className="bi bi-braces-asterisk pe-2"></i>
                <div className="d-none d-xl-inline">
                    Labs
                </div>
            </Link>
            <Link to="/tuiter/notifications" className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill pe-2"></i>
                <div className="d-none d-xl-inline">
                    Notifications
                </div>
            </Link>
            <Link to="/tuiter/messages" className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope-fill pe-2"></i>
                <div className="d-none d-xl-inline">
                    Messages
                </div>
            </Link>
            <Link to="/tuiter/bookmarks" className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill pe-2"></i>
                <div className="d-none d-xl-inline">
                    Bookmarks
                </div>
            </Link>
            <Link to="/tuiter/lists" className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list-ul pe-2"></i>
                <div className="d-none d-xl-inline">
                    Lists
                </div>
            </Link>
            <Link to="/tuiter/profile" className={`list-group-item
                    ${active === 'profile' || active === 'edit-profile' ?'active':''}`}>
                <i className="bi bi-person-fill pe-2"></i>
                <div className="d-none d-xl-inline">
                    Profile
                </div>
            </Link>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots pe-2"></i>
                <div className="d-none d-xl-inline">
                    More
                </div>
            </a>
        </div>
    );
};
export default NavigationSidebar;