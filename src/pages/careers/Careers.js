import { Link, useLoaderData } from "react-router-dom"
import careers_data from "../../data/careers_data.js"



export default function Careers() {
  const careersData = useLoaderData()
  const careers = careersData.careers

  console.log(typeof careers)

  return (
    <div className="careers">
      {careers.map(career => (
        <Link to={career.id.toString()} key={career.id}>
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
  
  return careers_data;
}