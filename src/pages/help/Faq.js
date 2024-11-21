import { useLoaderData } from "react-router-dom"

export default function Faq() {
  const faqdata = useLoaderData()
  return (
    <div className="faq">
      <h3>Frequently Asked Questions</h3>

      {faqdata.map(pair => {
        return <div className="question">
          <p><strong>{pair.question}</strong></p>
          <p>{pair.answer}</p>
          </div>
      })}

      

    </div>
  )
}


export async function questionsLoader(){
  const questionAnswers = [
    {
      question: "Can I major in computer science if I'm not good at math?",
      answer: "Yes, foundational math skills are essential, but not all computer science specialties require deep mathematical knowledge. For example, web development and user interface design focus more on programming skills and user experience principles. According to the BLS, computer science fields are expected to grow 22% from 2020 to 2030, significantly faster than the average for all occupations, indicating strong future job prospects."
    },
    {
      question: "What are the job prospects for petroleum engineers given the shift toward renewable energy?",
      answer: "While the BLS projects only a modest growth of 8% from 2020 to 2030 for petroleum engineers, the ongoing need for oil and gas exploration and extraction keeps this field relevant. Diversifying skills in sustainable technologies and renewable energy can enhance job security as the global energy sector evolves."
    },
    {
      question: "Is it worth getting a biomedical engineering degree, or is it better to focus on traditional fields like mechanical or electrical engineering?",
      answer: "Biomedical engineering offers a unique blend of medicine and engineering, with a projected growth rate of 6% from 2020 to 2030. This field plays a critical role in developing medical innovations such as prosthetics and implants. Traditional engineering fields offer broader opportunities but might lack the direct human impact focus that drives many into biomedical engineering."
    },
    {
      question: "Are internships important for engineering students, and how early should I start looking for them?",
      answer: "Internships are crucial for gaining practical experience. A survey by NACE shows that 60% of paid intern engineering internships result in job offers. Students should begin seeking internships as early as their first year of college to build industry connections and enhance their resumes."
    },
    {
      question: "What's the difference between studying computer science and information technology?",
      answer: "Computer science focuses on algorithmic processes, software development, and computer theory, while information technology is more concerned with the application of technology solutions within business contexts. The choice depends on whether you prefer developing new technologies (computer science) or implementing and managing existing technologies (IT)."
    },
    {
      question: "How can I prepare for a STEM degree while still in high school?",
      answer: "Engage in STEM-related activities such as coding bootcamps, math clubs, science fairs, and online courses in advanced math and science topics. AP courses in Calculus, Physics, Chemistry, and Computer Science can also provide a strong foundation."
    }
  ]

  return questionAnswers
}