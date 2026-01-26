
import "./Card.css"
import { useNavigate } from "react-router-dom";
function Card({ data, MEAllCardseSingleData }) {


  const navigate = useNavigate()
  // console.log(data)
  return (
    <div className="card">
      <img src={data?.image} alt="" />
      <p><b>About to card:</b>{data?.description.substring(0, 10)}</p>
      <button onClick={() => {
        navigate(`/single-card/${data?.id}`)
        MEAllCardseSingleData(data)
      }}>View All Details</button>
    </div>
  )
}
export default Card;