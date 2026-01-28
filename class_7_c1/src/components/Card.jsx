// import React from 'react'

// function Card(props) {
//     console.log("props in card",props);
//     console.log(props.collageInfo)
//     const school = {
//         name: "Greenwood High School",
//         location: "New York",
//         students: 500,
//         teachers: 40,
//         subjects: ["Math", "Science", "English", "History"],
//         isPublic: true
//     };

//     return (
//         <div>
//             <div className="card">
//                 <h3>Name of School:{school?.name}</h3>
//                 <p><strong>Location:</strong> {school?.location}</p>
//                 <p><strong>Students:</strong> {school?.students}</p>
//                 <p><strong>Teachers:</strong> {school?.teachers}</p>
//                 <p><strong> School Type:</strong> {school?.isPublic}</p>
//             </div>

//             <div className="card">
//                 <h3>Name of Collage:{props.collageInfo?.name}</h3>
//                 <p><strong>Location of Collage:</strong> {school?.location}</p>
//                 <p><strong>Students in Collage:</strong> {school?.students}</p>
//                 <p><strong>Teachers in Collage:</strong> {school?.teachers}</p>
//                 <p><strong> Collage Type :</strong> {school?.isPublic}</p>
//             </div>
//         </div>
//     )
// }

// export default Card






//best way 
function Card({ collageInfo, getTheValueOfSchool }) {
    const school = {
        name: "Greenwood High School",
        location: "New York",
        students: 500,
        teachers: 40,
        subjects: ["Math", "Science", "English", "History"],
        isPublic: true
    };

    return (
        <div>
            <button onClick={() => {
                getTheValueOfSchool(school)
            }}>Pass Data</button>

            <div className="card">
                <h3>Name of Collage:{collageInfo?.name}</h3>
                <p><strong>Location of Collage:</strong> {collageInfo.location}</p>
                <p><strong>Students in Collage:</strong> {collageInfo?.students}</p>
                <p><strong>Teachers in Collage:</strong> {collageInfo.teachers}</p>
                <p><strong> Collage Type :</strong> {collageInfo.isPublic}</p>
            </div>
        </div>
    )
}

export default Card