import { useLoaderData, useParams } from 'react-router-dom'

export default function CareerDetails() {
  const { id } = useParams()
  const career = useLoaderData()

  return (
    <div className="career-details">
      <h2>Career Details for {career.title}</h2>
      <p>Starting salary: {career.salary}</p>
      <p>Location: {career.location}</p>
      <div className="details">
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta sed sunt ipsam quam assumenda quasi ipsa facilis laborum rerum voluptatem!</p>
      </div>
    </div>
  )
}

// data loader
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params

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

  let careers = careersData.careers
  let right_career = careers.find(career => {
    return career.id == id
  })

  if (!right_career){
    throw Error('Career not found!')
  }
  
  console.log(right_career)


  return right_career
}
