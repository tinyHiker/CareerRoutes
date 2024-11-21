import { Form } from "react-router-dom"
import {redirect} from "react-router-dom"

export async function deleteIdea(){
    console.log("deleteIdea ran")

    return redirect('/')
}

export default function Listed({ tkey, idea }) {
    return (
        <li id={tkey} className="list-item">
            {idea} 
            <Form method="post"  className="inline-form">
                <button type="submit">Delete</button>
                <input type="hidden" name="action" value="deleteIdea"></input>
                <input type="hidden" name="ideaId" value={tkey}></input>
            </Form>
        </li>
    );
}