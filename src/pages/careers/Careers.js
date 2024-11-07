import { Link, useLoaderData } from "react-router-dom"



export default function Careers() {
  const careersData = useLoaderData()
  const careers = careersData.careers

  console.log(typeof careers)

  return (
    <div className="careers">
      {careers.map(career => (
        <Link to='/' key={career.id}>
          <p>{career.title}</p>
          <p>Based in {career.location}</p>
        </Link>
      ))}
    </div>
  )
}

// data loader
/*
export const careersLoader = async () => {
  const res = await fetch('http://localhost:4000/careers')

  return res.json()
}
*/


export const careersLoader = async () => {
  // Directly return the imported JSON data
  let careersData = {
    "careers": [
      {
        "id": 1,
        "title": "Senior React Developer",
        "salary": 50000,
        "location": "London, UK"
      },
      {
        "id": 2,
        "title": "Plumber",
        "salary": 40000,
        "location": "Bowser's Castle"
      },
      {
        "id": 3,
        "title": "Gym Leader",
        "salary": 75000,
        "location": "Kanto Region"
      },
      {
        "id": 4,
        "title": "Vue Developer",
        "salary": 40000,
        "location": "Liverpool, UK"
      },
      {
        "id": 5,
        "title": "Tutorial Maker",
        "salary": 35000,
        "location": "Manchester, UK"
      },
      {
        "id": 6,
        "title": "Website Manager",
        "salary": 50000,
        "location": "Berlin, Germany"
      },
      {
        "id": 7,
        "title": "Food Tester",
        "salary": 30000,
        "location": "London, UK"
      }
    ]
  }
  return careersData;
}