import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      '
      <div className="singlePostWrapper">
        <img
          src="https://cdn.pixabay.com/photo/2024/02/07/14/02/tree-8559118_1280.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum, dolor sit amet consectetur
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Hanstin</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
          </div>
          <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus,
            pariatur autem alias odit laudantium tenetur sint aperiam maiores?
            Natus magnam autem atque voluptatibus eaque cumque blanditiis fuga
            aut facere dolorem!
          </p>
        
      </div>
    </div>
  );
}
