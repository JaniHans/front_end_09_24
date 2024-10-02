import "./header.css"

export default function Header() {
    return (
        <div className="header">
           <div className="headerTitles">
            <span className="headerTitleSm">React & Node</span>
            <span className="headerTitleLg">Blog</span>
           </div>
           <img 
           className="headerImg"
           src="https://cdn.pixabay.com/photo/2024/04/10/22/52/autumn-8688873_1280.jpg"
           alt=""
           />
        </div>
    )
}