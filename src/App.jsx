
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

// import "./App.css";
// import icon from "./assets/ballot_24px.svg";
// import Card from "./component/Card";
// import Header from "./component/Header";
// import Post from "./component/Post";
// import Alif from "./component/Alif";

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

// import img from "./assets/noutbook.jpg";
// import img1 from "./assets/noutbook1.jpg";
// import img2 from "./assets/sumka.jpg";



// function App() {
//   const data = Array.from({ length: 10 });
//   const alifData = [
//     {
//       id: 0,
//       image: img,
//       title: "Ноутбук Lenovo ThinkBook 15 G4 IAP (21DJ0017RU) / i3-1215U / 8GB / SSD 256GB / MX550 2GB / 15.6",
//       text: "6920000 sum",
//       span: "OT 504583 sum/mes",
//     },
//     {
//       id: 1,
//       image: img1,
//       title: "Ноутбук HP 255 G9 (5Y3X2EA) / AMD R7-5825U / 8GB / HDD 1TB / 15.6",
//       text: "6790000 sum",
//       span: "OT 504583 sum/mes",
//     },
//     {
//       id: 2,
//       image: img2,
//       title: "Сумка для ноутбука  2E Laptop Bag, Beginner 13.3 seriy",
//       text: "221 770 sum",
//       span: "1217 708 sum/mes",
//     },
//   ];
//   const cardData = [
//     {
//       id: 0,
//       image: icon,
//       title: "web design",
//       text: "Research, user experience testing, mockups, and prototypes",
//     },
//     {
//       id: 1,
//       image: icon,
//       title: "development",
//       text: "Research, user experience testing, mockups, and prototypes",
//     },
//     {
//       id: 2,
//       image: icon,
//       title: "research",
//       text: "Research, user experience testing, mockups, and prototypes",
//     },
//   ];


//   return (
//     <div className="alif-container">
//       {alifData.map((el) => (
//         <Alif
//           key={el.id}
//           image={el.image}
//           title={el.title}
//           text={el.text}
//           span={el.span}
//         />
//       ))}
//     </div>
//   );

// }
//   return (
//     <div>
//       {data.map((el) => (
// <Header/>
//       ))}
//     </div>
//   );
import { useState } from "react";
import "./App.css";
import Modal from "./component/Modal";
import TodoList from "./component/TodoList";

function App() {
  // Hook
  // useState
//   const [count, setCount] = useState(0);
//   const [modal, setModal] = useState(false)

//   function reversValue() {
//     setCount( count + 1);
//   }

//   function decrement() {
//     setCount(count - 1);
//   }

//   function openModal() {
//     setModal(true);
//   }

 
//   return (
//    <div>
//      <div className="counter-wrapper">
//       <button className="increment" onClick={reversValue}>
//         +
//         </button>
//         <span className='count'>{count}</span>
//         <button className="decrement" disabled={count==0} onClick={decrement}>
//           -

//         </button>
//     </div>

//     <button className="clickme" onClick={openModal}>click me</button>

//     {/* <Modal/> */}
//     {modal && <Modal setModal= {setModal} />}
//    </div>
//   );


const [todo, setTodo] = useState([
  {
    id: 1,
    title: "Title 1",
    complated: false,
  },
  {
    id: 2,
    title: "Title 2",
    complated: false,
  },
  {
    id: 3,
    title: "Title 3",
    complated: false,
  },
  {
    id: 4,
    title: "Title 4",
    complated: true,
  },
]);

const [todoTitle, setTodoTitle] = useState("");

function addTodo(e) {
  if (e.key == "Enter") {
    setTodo([
      ...todo,
      {
        id: Date.now(),
        title: todoTitle,
        complated: false,
      },
    ]);

    setTodoTitle("");
  }
}

return (
<div>

  <input type="text" 
  placeholder="Type here"  
  onChange={(e) => setTodoTitle(e.target.value)} 
  value={todoTitle}
  onKeyDown={addTodo} />

  {todo.map((el) => (
    <TodoList  key={el.id} {...el}/>
  ))}
</div>
);

}

export default App;
