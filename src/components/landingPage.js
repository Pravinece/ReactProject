import { useNavigate } from "react-router-dom"
import Choice from "./home"
import Headers from "./header"
import Footer from "./footer"
import './landing.css'



export default function LandingPage(){
    return <>
    <Headers/>
    <Choice/>
    <Footer/>
    </> 
}