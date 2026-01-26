import "./Card.css"
import { useNavigate } from "react-router-dom"
function SingleCardAllInfo({data}) {
    console.log("data me data card comp",data)
      const navigate = useNavigate()
  return (
     <div className="card">
      <img src={data?.image} alt="" />
      <p><b>About to card:</b>{data?.description.substring(0,10)}</p>
      <h1>price:₹{data?.price}</h1>
      <p>rating:{data?.rating?.rate}</p>
      <p>category:{data?.category}</p>
      <button onClick={()=>navigate(-1)}>Back to All Card</button>
    </div>
  )
}

export default SingleCardAllInfo