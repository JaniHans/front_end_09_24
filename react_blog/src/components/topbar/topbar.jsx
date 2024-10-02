import "./topbar.css"

export default function TopBar() {
    return (
        <div className="top">
        <div className="topLeft"></div>
        <i className="topIcon fab fa-brands fa-square-facebook"></i>
        <i className="topIcon fab fa-brands fa-square-twitter"></i>
        <i className="topIcon fab fa-brands fa-pinterest"></i>
        <i className="topIcon fab fa-brands fa-instagram"></i>
        <div className="topCenter"></div>
        <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">LOGOUT</li>
        </ul>
      
        <div className="topRight">
        <img className="topImg" src="https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt=""/>
        <i class="fa-solid fa-magnifying-glass"></i>
        </div>
        </div>
    )
}