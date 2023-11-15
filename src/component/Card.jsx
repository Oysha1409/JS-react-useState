// function Card() {
//     return (
//         <div>
//             <h2>Lorem ipsum dolor sit amet.</h2>
//             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi provident dolorem quasi, dignissimos 
//                 sed pariatur ipsam quia accusantium! Nobis est necessitatibus dicta veritatis temporibus laborum sed doloribus 
//                 tempora aspernatur mollitia!</p>

//                 <button>Click</button>
//         </div>
//     );

// }

// export default Card;

import cardIcon from "../assets/ballot_24px.svg";
import "./style.css";
export const Card = (props) => {
    console.log(props.title);

    return (
        <div className="card">
            <div className="image-wrapper">
                <img src={props.image}  alt="" className="card-icon"/>
            </div>
            <h2 className="card-title">{props.title}</h2>
            <p className="card-text">{props.text}</p>
        </div>
    );
};

export default Card;