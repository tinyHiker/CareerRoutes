import Lister from './Lister.js'
import { redirect, useLoaderData } from 'react-router-dom'

export async function brainstorm_action({ request }){
  let res = await request.formData()
  let {...form_data} = Object.fromEntries(res)

  

  if(form_data.action === "createIdea"){
    console.log("createIdea RAN")
    let old_data = JSON.parse(localStorage.getItem('ideas'));
    let old_content = old_data['content']
    let new_content = [...old_content, [crypto.randomUUID(),form_data.idea]]
    let new_data = {'content': new_content}
    localStorage.setItem('ideas', JSON.stringify(new_data))
    return redirect('/')
  } else if (form_data.action ==="deleteIdea"){

    let old_data = JSON.parse(localStorage.getItem('ideas'));
    let old_content = old_data['content']

    console.log(`IDEA ID: ${typeof form_data.ideaId}`)

    
    let new_content = old_content.filter(content => {
      return content[0] !== form_data.ideaId

    })

    console.log(new_content)
    let new_data = {'content': new_content}
    localStorage.setItem('ideas', JSON.stringify(new_data))
    return redirect('/')

  }
  
  
}

export async function brainstorm_loader(){
  let data = JSON.parse(localStorage.getItem('ideas'));
  return data['content']
  
}


export default function Home() {

  let data = useLoaderData()
  

  return (
    <div className="home">
      <h2>Welcome</h2>
      <p>CareerRouter is a simple page providing information on STEM career-routes. It is designed specifically to guide high school students who are often unprepared and unaware of the myriad career options available to them.</p>

      <p>Research and educational surveys consistently reveal that a significant number of high school students feel they lack adequate guidance when it comes to choosing career paths and relevant university programs. This gap in knowledge can lead to students making uninformed choices that may not align with their potential and career goals.</p>

      <p>By offering a clear and accessible overview of careers in science, technology, engineering, and mathematics, CareerRouter aims to empower students with the knowledge to make informed decisions about their future educational and professional pursuits. </p>

      <Lister data={data}/>


      
    </div>
  )
}
