// import logo from './logo.svg';
// import './App.css';

import { Route, Routes } from "react-router-dom";
import One from "./One";
import Two from "./Two";
import Three from "./Three";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

// import { useState } from 'react';

// function App() {
//     // let userName = "speed up";
//     // let run = () =>{
//     //     let x = 20;
//     //     let y = 10;
//     //     if(x > y){
//     //         const result = "done"
//     //     }else{
//     //         const result1 = "fale"
//     //     }
//     // }
//     // run();
//     const [userName, setUserName] = useState("speed up");
//     return (
//         <div> {userName} App.

//             <button onClick={() => {
//                 setUserName("speed down")
//             }}>Click</button>
//         </div>
//     )
// }

// export default App;

//useEffect :- eske use se api calling krna 
// import React, { useEffect } from 'react'
// import { useState } from 'react';

// function App() {
//     const [info, setInfo] = useState([]);
//     useEffect(() => {
//         async function fetchapi(){
//             const res = await fetch(`https://fakestoreapi.com/products`);
//             const ans = await res.json();
//             setInfo(ans);
//             // console.log(info)
//         }
//         fetchapi();
//     },[]);
//         return (
//             <div>
//                 {/* {
//                     info.map( (e) => {
//                         <p>{it.title}</p>
//                     })
//                 } */}
//                 <p>{info[0]?.title}</p>
//             </div>

//         );
// }
// export default App;

//Routing :- kind of process which allow to move one page to another page
// import React from 'react'
import { Link } from "react-router-dom";

function App() {
    return (
        <>
            <nav>
                <Link to="./One">One</Link> |
                <Link to="./Two">Two</Link> |
                <Link to="./Three">Three</Link>
            </nav>

            <Routes>
                <Route path="/One" element={<One />} />
                <Route path="/Two" element={<Two />} />
                <Route path="/Three" element={<Three />} />
            </Routes>

        </>
    )
}

export default App
