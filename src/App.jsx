
// import './App.css';
// import {Card } from './component/Card';
// import {Post} from './component/Post';

// function App() {
//   return (
//     <div className="card-container">
//       <Card  title='web design'  text='Birinchi text'/>
//       <Card  title='development' text='Ikkinchi text'/>
//       <Card  title='research' text='Uchinchi text'/>
//       <Post/>
//     </div>
//   );
// }




// export default App;

import "./App.css";
import icon from "./assets/ballot_24px.svg";
import Card from "./component/Card";
import Header from "./component/Header";
import Post from "./component/Post";

// function App() {
//   return (
//     <div className="card-container">
//       <Post title='Props title' text='Props text 124' image={icon}/>
//       <Post title='Props title 12' text='Props text 145' image={icon}/>
//       <Post title='Props title 13' text='Props text 146' image={icon}/>
//       <Post title='Props title 14' text='Props text 147' image={icon}/>

//     </div>
//   );
// }

function App() {
  const data = Array.from ({ length: 10});
  const cardData = [
    {
      id: 0,
      image: icon,
      title: "web design",
      text: "Research, user experience testing, mockups, and prototypes", 
    },
    {
      id: 1,
      image: icon,
      title: "development",
      text: "Research, user experience testing, mockups, and prototypes", 
    },
    {
      id: 2,
      image: icon,
      title: "research",
      text: "Research, user experience testing, mockups, and prototypes", 
    },
  ];
  return (
    <div className="card-container">
      {cardData.map((el) => (
        <Card
        key={el.id}
        image={el.image}
        title={el.title}
        text={el.text}
        />
      ))}
    </div>
  );
  }
//   return (
//     <div>
//       {data.map((el) => (
// <Header/>
//       ))}
//     </div>
//   );


export default App;
