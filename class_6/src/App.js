
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import AllCard from "./pages/AllCard"
import NotFount from "./pages/NotFound"
import Navbar from "./components/Navbar"
import SingleCardAllInfo from "./components/SingleCardAllInfo.jsx"
import { useEffect, useState } from "react"
function App() {
  const [data, setData] = useState();
  function MEAllCardseSingleData(info) {
    console.log("@@@@@@@@@@@@@@@@@@@@@@@@@@",info)
    setData(info)
  }
  const [card, setCard] = useState([]);
  async function callCardApi() {
    try {
      const res = await fetch("https://fakestoreapi.com/products");
      const ans = await res.json();
      setCard(ans);
    }
    catch (er) {
      console.log("error", er)
    }
  }
  console.log("Card", card)

  useEffect(() => {
    callCardApi()
  }, []);
  return (
    <div>

      <Navbar />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/all-card" element={<AllCard card={card} MEAllCardseSingleData={MEAllCardseSingleData} />} />
        <Route path="/single-card/:id" element={<SingleCardAllInfo data={data}/>} />
        <Route path="*" element={<NotFount />} />
      </Routes>
    </div>
  )
}

export default App