import './App.css';
import React from "react"


export default function Splash(props){
    return(<div className="Splash">
      
    <h1>Quizzical</h1>
    <p>A test of 5 questions that makes you practice your common knowledge!</p>
    
    <button onClick={props.startQuiz}>Start quiz</button>
  </div>
  )

}