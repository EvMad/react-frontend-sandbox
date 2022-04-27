import "./singlePost.css";

export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img src="istockphoto-1179480831-170667a.jpg" alt="fishing net" className="singlePostImg">

                </img>
                <h1 className="singlePostTitle">
                    Ut enim ad minima veniam 
                    <div className="singlePostEdit">
                    <i class="fa-solid fa-pen-to-square"></i>
                    <i class="fa-solid fa-circle-trash"></i>
                    </div>
                </h1>
            </div>
        </div>
    )
}