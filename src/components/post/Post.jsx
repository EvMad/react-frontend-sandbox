import { useEffect } from "react";
import { render } from "react-dom";
import "./post.css"

// random image 


const renderImage = () => {

    const myImages = [
        { image: '../../../images/istockphoto-1330878489-170667a.jpg' },
        { image: '../../../images/istockphoto-946355244-170667a.jpg' },
        { image: '../../../images/istockphoto-1179480831-170667a.jpg' },
        { image: '../../../images/istockphoto-1227039338-170667a.jpg' },
        { image: '../../../images/istockphoto-1289259892-170667a.jpg' },
        { image: '../../../images/photo-1560260240-c6ef90a163a4.jpg' },
        { image: '../../../images/photo-1507525428034-b723cf961d3e.jpg' },
        { image: '../../../images/photo-1616197125460-587e9c9313b7.jpg' }
        
    ];

    const randomImageIndex = Math.floor(Math.random() * Math.floor(8));
    return myImages[randomImageIndex].image;
    
};



export default function Post() {
    return (
        <div className="post">
            <img className="postImg" src={renderImage()} alt="nautical">
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
            <p className="postDesc">Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
                consectetur, adipisci velit, sed quia non numquam eius modi tempora
                 incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                 Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
                 suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                 Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
                consectetur, adipisci velit, sed quia non numquam eius modi tempora
                 incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                 Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
                 suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
                 Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, 
                consectetur, adipisci velit, sed quia non numquam eius modi tempora
                 incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                 Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis 
                 suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?
            </p>
        </div>
    )
}