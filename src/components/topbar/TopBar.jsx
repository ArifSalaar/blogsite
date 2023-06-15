import "./topbar.css";
import{ Link } from "react-router-dom";

export default function TopBar() {
  const user = false;
  return (
    <div className='top'>
      <div className="topLeft">
      <i class="fa-brands fa-square-facebook"></i>
      <i class="fa-brands fa-square-pinterest"></i>
      <i class="fa-brands fa-square-twitter"></i>
      <i class="fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">
            <Link to="/home" className="link" > HOME</Link>
            </li>
            <li className="topListItem">
            <Link to="/about" className="link" > ABOUT</Link>
            </li>

            <li className="topListItem">
            <Link to="/contact" className="link" >CONTACT</Link>
            </li>
            
            <li  className="topListItem">
            <Link to="/write" style={{textDecoration:"none", color:"inherit"}} > WRITE</Link>
            </li>
            <li  className="topListItem">
              {user && "LOGOUT"}
            </li>
        </ul>
      </div>
      <div className="topRight">
        {
          user ? (
          <img src="images/nasir2.PNG" className="topimg" />
          )
          :
          (
            <ul className="topList">
              <li className="topListItem">
              <Link className="link" to="/login"> LOGIN </Link>
              </li>
              <li className="topListItem">
              <Link className="link" to="/register"> REGISTER </Link>
              </li>
          </ul>
          )
        }
        <i className="topSearchIcon fas fa-search"></i>
         </div>
    </div>
  )
}

