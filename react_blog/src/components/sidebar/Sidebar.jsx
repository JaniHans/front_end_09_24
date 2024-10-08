import "./sidebar.css"

export default function Sidebar
() {
  return (
    <div className="sidebar">
        <div className="sidebarItem">
            <span className="sidebarTitle">ABOUT ME</span>
            <img src="https://cdn.pixabay.com/photo/2024/07/25/08/47/flower-8920535_1280.jpg" alt=""/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.

            </p>
            </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">CATEGORIES</span>
            <ul className="sidebarList">
            <li className="sidebarListItem">Life</li>
            <li className="sidebarListItem">Music</li>
            <li className="sidebarListItem">Style</li>
            <li className="sidebarListItem">Sport</li>
            <li className="sidebarListItem">Tech</li>
            <li className="sidebarListItem">Cinema</li>
            </ul>
        </div>
        <div className="sidebarItem">
            <span className="sidebarTitle">FOLLOW US</span>
            <div className="sidebarSocial">
            <i className="sidebarIcon fab fa-brands fa-square-facebook"></i>
            <i className="sidebarIcon fab fa-brands fa-square-twitter"></i>
            <i className="sidebarIconfab fa-brands fa-pinterest"></i>
            <i className="sidebarIcon fab fa-brands fa-instagram"></i>
            </div>
            </div>
        </div>
    
  )
}
