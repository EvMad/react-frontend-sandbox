import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src="istockphoto-1330878489-170667a.jpg" alt="fishing boat">
            </img>
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit amet
                </span>
                <hr/>
                <span className="postDate">1 hour ago</span>
            </div>
        </div>
    )
}