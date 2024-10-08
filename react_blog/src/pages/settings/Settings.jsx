import Sidebar from "../../components/sidebar/Sidebar";
import "./settings.css";

export default function Settings() {
  return (
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">Update Your Account</span>
          <span className="settingsDeleteTitle">Delete Account</span>
        </div>
        <form className="settingsForm">
          <label>Profile Picture</label>
          <div className="settingsPP">
            <img
              src="https://cdn.pixabay.com/photo/2024/02/07/14/02/tree-8559118_1280.jpg"
              alt=""
            />
            <label htmlFor="fileInput">
            <i className="settingsPPIcon fa-regular fa-circle-user"></i>
            </label>
            <input type="file" id="fileInput" style={{display: "none"}}/>
          </div>
          <label >Username</label>
          <input type="text" placeholder="Hanstin"/>
          <label >Email</label>
          <input type="email" placeholder="hanstin@gmail.com"/>
          <label >Password</label>
          <input type="password" />
          <button className="settingsSubmit">Update</button>
        </form>
        <Sidebar />
      </div>
    </div>
  );
}
