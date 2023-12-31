import "./settings.css";
import Sidebar from '../../components/sidebar/Sidebar';

export default function Settings() {
  return (
    <div className='settings'>
        <div className="settingsWrapper">
           <div className="settingsTitle">
            <span className="settingsUpdateTitle"> Update Your Account</span>
            <span className="settingsDeleteTitle"> Delete Account</span>
           </div>
           <form className="settingsForm">
            <label> Profile Picture</label>
            <div className="settingsPP">
              <img src="images/flower.jpg" />
                <label htmlFor="fileInput"> 
                <i className=" settingsPPIcon fa-regular fa-circle-user"></i>
                </label>
                <input type="file" id="fileInput"  style={{display:"none"}}/>
            </div>
            <label> Username</label>
          <input type="text" placeholder="Salaar" />
          <label> Email</label>
          <input type="Email" placeholder="salaar@gmail.com" />
          <label> Password</label>
          <input type="password"  />
            <button className="settingSubmit">Update</button>
           </form>
        </div>
        <Sidebar />
    </div>
  )
}
