
function Two({rr}) {
  let fil = rr.filter((item)=>item >10);
  return (
    <div>
      {/* {rr.map((item,index) => <p key={index}>{item}</p>)} */}
      {fil.map((item,index) =><p key={index}>{item}</p>)}
      {
        rr.reduce((acc, item) => acc + item)
      }
    </div>
  )
}

export default Two