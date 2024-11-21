import { Form } from "react-router-dom"
import Listed from "./Listed.js"

export default function Lister({data}) {
    return (
      <div className="home">
        <hr></hr>
        <div id="brainstorm">
        <Form method = "post">
          <div id="brainstorm">
            
            <h2 id="brainstorm-title">Brainstorm pad</h2>
            <label htmlFor='idea' id="idea-label"> Brainstorm the careers you might want to take</label>
            
            <input id="idea" type="text" placeholder="Environmental Engineer" name="idea"></input>

            <input type="hidden" name="action" value="createIdea"></input>

            <button id="idea-submit" type='submit'>Add</button>

          </div>
        </Form>

        <ul>
                {data.map((idea) => {
                  return <Listed idea={idea[1]} tkey={idea[0]}/>
                })}
        </ul>
        </div>

        <br></br>
        <hr></hr>
      </div>
    )
  }