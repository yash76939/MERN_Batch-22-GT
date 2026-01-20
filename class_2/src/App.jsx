// // // import React from 'react'

// import { useState } from "react"

// // import One from "./components/One"
// // import Two from "./components/Two"

// // function App() {
// //   const info = {
// //     id:101,
// //     name: "yaho"
// //   }
// //   const arr = [10,20,70];
// //   return (
// //     <>
// //     <Two rr={arr}/>
// //     <One obj = {info}/>
// //     </>
// //   )
// // }

// // export default App


// //Hook's :- 1. useState()
// function App() {
//   const [data, setData] = useState({
//     name: "madicaps",
//     address: "indore",
//     type: "private",
//     fees: "100504"
//   })

//   function changeClgData() {
//     // setData( (prev) => {
//     //   return {...prev,name:"IPS"}
//     // })

//     // setData((oldData) => {
//     //   let value = {...oldData, name:"IPS"} // .... --> split operator hota hai jo uske sath likhi value ko add kr leta hai
//     //   console.log(value)
//     //   return value;
//     // })

//     //add new key
//     setData((oldData) => {
//       let value = { ...oldData, newData: "Done" , name:"IPS"} // .... --> split operator hota hai jo uske sath likhi value ko add kr leta hai ya 2 object ko add krta hai
//       console.log(value)
//       return value;
//     })
//   }
//   return (
//     <div>
//       <p>Name:<b>{data.name}</b></p>
//       <p>Address:<b>{data.address}</b></p>
//       <p>ClgType:<b>{data.type}</b></p>
//       <p>Fees:<b>{data.fees}</b></p>
//       <p><mark>NewData:{data.newData}</mark></p>
//       <button onClick={changeClgData}>Change Data</button>
//     </div>
//   )
// }

// export default App


// 2. useEffect
function App() {
  return (
    <div>App</div>
  )
}

export default App