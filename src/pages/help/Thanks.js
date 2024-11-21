import React from "react"
import {useNavigate} from "react-router-dom"

export default function Thanks(){
    let nav = useNavigate()

    setTimeout(()=> {
        nav('/help/faq/')
    }, 2000)
    return (
        <>
        <h1>Thankyou for contacting. Our team should contact you within 3 bussiness days </h1>
        </>
    );
}