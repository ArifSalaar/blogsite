import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle"> ABOUT ME</span>
            <img src=" images/rr.PNG" />
            <p>A React JS developer is responsible for building and maintaining web applications using the React JavaScript library.
                 They work with UI/UX designers </p>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle"> CATEGORIES</span>
        <ul className="sidebarList">
            <li className="sidebarListItem"> Life</li>
            <li className="sidebarListItem"> Node</li>
            <li className="sidebarListItem"> React</li>
            <li className="sidebarListItem"> Laravel</li>
            <li className="sidebarListItem"> PhP</li>
            <li className="sidebarListItem">Tech</li>
        </ul>
        </div>
        <div className="sidebarItem">
        <span className="sidebarTitle"> FOLLOW US</span>
        <div className="sidebarSocial">
        <i class="sidebarIcon fab fa-square-facebook"></i>
        <i class="sidebarIcon fab fa-square-pinterest"></i>
        <i class="sidebarIcon fab fa-square-twitter"></i>
        <i class="sidebarIcon fab fa-square-instagram"></i>
        </div>
    </div>
    </div>
  )
}
