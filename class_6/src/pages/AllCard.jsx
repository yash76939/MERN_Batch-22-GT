import Card from "../components/Card"
// import "./AllCard.css"

function AllCard({ card ,MEAllCardseSingleData}) {
  return (
    <div style={{ color: "white", display: "flex", gap:"10px", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap" }}>
      {
        card.map((singleCard, index) => <Card key={index}  data={singleCard} MEAllCardseSingleData={MEAllCardseSingleData}/>)
      }

    </div>

  )
}

export default AllCard