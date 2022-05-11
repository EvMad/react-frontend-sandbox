import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar";

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Your Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img src="./photo-1507525428034-b723cf961d3e.jpg" alt=""></img>
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput"></input>
                    </div>
                </form>
                <Sidebar/>
            </div>
        </div>
    )
}