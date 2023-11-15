
// import postImg1 from "../assets/Post-img1.png";
// import postImg2 from "../assets/Post-img2.png";
// import postImg3 from "../assets/Post-img3.png";
// import "./style.css";
// export const Post = (props) => {
//     console.log(props.title);

//     return (
//         <div className="post">
//             <div className="img-wrap">
//                 <img src={postImg1}  alt="" className="post-img"/>
//             </div>
//             <h2 className="post-title">{props.title}</h2>
//             <p className="post-text">{props.text}</p>
//         </div>
//     );
// };

import React from "react";
const Post = (props) => {
    // Distruktizatsiya
    const{title, text, image} = props;
    return (
        <div>
            <img src={image} alt={text} />
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
}

export default Post;