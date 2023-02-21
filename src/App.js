import './App.css';
import React from "react"
import Splash from './Splash';
import Test from './Test';

function App() {
  const [quizStart , setQuizStart] = React.useState(false)
  function startQuiz(){
    setQuizStart(prevQuizStart => !prevQuizStart)
  }
  return (
    <div className="App">
      
     {quizStart===false?
     < Splash startQuiz={startQuiz}/>
     :< Test />
  }
    </div>
    
  
    
  
  );
}

export default App;
