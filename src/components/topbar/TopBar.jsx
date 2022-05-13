import { Link } from "react-router-dom";
import './topbar.css'

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
            <i className="topIcon fa-brands fa-facebook-square"></i>
            <i className="topIcon fa-brands fa-twitter-square"></i>
            <i className="topIcon fa-brands fa-instagram-square"></i>
            <i className="topIcon fa-brands fa-pinterest-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem"><Link className="link" to="/">HOME</Link></li>
                    <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
                    <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
                    <li className="topListItem"><Link className="link" to="/">WRITE</Link></li>
                    <li className="topListItem"><Link className="link" to="/">LOGOUT</Link></li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg"
                src="./photo-1507525428034-b723cf961d3e.jpg" alt="" />
                <i className ="searchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}