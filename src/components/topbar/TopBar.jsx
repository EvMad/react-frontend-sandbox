import { Link } from "react-router-dom";
import './topbar.css'

export default function TopBar() {

    const user = false;

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
                    <li className="topListItem">{ user && "LOGOUT" }</li>
                </ul>
            </div>
            <div className="topRight">

                {
                    user ? (

                        <img className="topImg"
                src="images/photo-1507525428034-b723cf961d3e.jpg" alt="" />

                    ) : (
                        <ul className="topList">
                            <li className="topListItem"><Link className="link" to="/login">LOGIN</Link></li>
                            <li className="topListItem"><Link className="link" to="/register">REGISTER</Link></li>
                        </ul>
                        
                    )
                }
                
                <i className ="searchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}