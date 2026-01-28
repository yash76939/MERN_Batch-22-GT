
import { useState } from 'react';
import Card from './components/Card';

function App() {
  const [school, setSchool] = useState();
  function getTheValueOfSchool(sc) {
    setSchool(sc)
  }
  console.log(school)
  const Collage = {
    name: "Shri Ram Group of Institutions , Jabalput",
    location: "Jabalpur, Mp",
    students: 1200,
    teachers: 360,
    stream: ["Chemistry", "CSE", "Civil", "ME"],
    isPublic: "true"
  };
  return (
    <div>
      <Card collageInfo={Collage} getTheValueOfSchool={getTheValueOfSchool} />
      {/* {
        school && <div className="card">
          <h3>Name of School:{school?.name}</h3>
          <p><strong>Location:</strong> {school?.location}</p>
          <p><strong>Students:</strong> {school?.students}</p>
          <p><strong>Teachers:</strong> {school?.teachers}</p>
          <p><strong> School Type:</strong> {school?.isPublic}</p>
        </div>
      } */}

      {
        school === undefined ? (<p>No data exist in school object</p>) : (school && <div className="card">
          <h3>Name of School:{school?.name}</h3>
          <p><strong>Location:</strong> {school?.location}</p>
          <p><strong>Students:</strong> {school?.students}</p>
          <p><strong>Teachers:</strong> {school?.teachers}</p>
          <p><strong> School Type:</strong> {school?.isPublic}</p>
        </div>)
      }
    </div>
  )
}

export default App