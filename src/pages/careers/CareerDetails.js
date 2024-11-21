import { useLoaderData, useParams } from 'react-router-dom'
import careers_data from "../../data/careers_data.js"

export default function CareerDetails() {
  const { id } = useParams()
  const career = useLoaderData()
  

  return (
    <div className="career-details">
      <h2>{career.title}</h2>
      <div className="details details-fonting">
        <p>{career.description}</p>
      </div>
      <p>Average Entry-Level Salary: <span className="details-fonting">{convertSalary(career.startingSalary)}</span></p>
      <p>Average Senior Salary: <span className="details-fonting">{convertSalary(career.seniorSalary)}</span></p>
      <p>Canadian Magnet Location: <span className="details-fonting">{career.location}</span></p>
      <p>Mental Stress: <span className="details-fonting">{career.mentalStress}/100</span></p>
      <p>Physical Stress: <span className="details-fonting">{career.physicalStress}/100</span></p>
      <p>Required Education Level: <span className="details-fonting">{career.educationLevel}</span></p>
      <p>Years of Study: <span className="details-fonting">{career.yearsOfStudy}</span></p>
    </div>
  )
}


function convertSalary(salary){
  let front = String(salary/1000)
  let back = ",000"

  return front + back

}

// data loader
export const careerDetailsLoader = async ({ params }) => {
  const { id } = params


  let careers = careers_data.careers
  let right_career = careers.find(career => {
    return career.id == id
  })

  if (!right_career){
    throw Error('Career not found!')
  }
  
  console.log(right_career)


  return right_career
}
