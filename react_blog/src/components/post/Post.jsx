import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img className="postImg" src="https://cdn.pixabay.com/photo/2023/11/02/15/58/flower-8360946_1280.jpg" alt=""
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Music</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet
            </span>
            <hr/>
            <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti iusto veniam, doloribus a asperiores nulla necessitatibus repellendus! Unde praesentium a sunt velit quos, libero sapiente consectetur. Dignissimos, ipsa voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti iusto veniam, doloribus a asperiores nulla necessitatibus repellendus! Unde praesentium a sunt velit quos, libero sapiente consectetur. Dignissimos, ipsa voluptatum.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut deleniti iusto veniam, doloribus a asperiores nulla necessitatibus repellendus! Unde praesentium a sunt velit quos, libero sapiente consectetur. Dignissimos, ipsa voluptatum.
            </p>
        </div>
  )
}
