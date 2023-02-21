import "./App.css";
import React from "react";
import Splash from "./Splash";
import TestQuestions from "./TestQuestions/index";

function App() {
  const [quizStart, setQuizStart] = React.useState(false);

  return (
    <div className="App">
      {quizStart === false ? (
        <Splash startQuiz={() => setQuizStart((prev) => !prev)} />
      ) : (
        <TestQuestions />
      )}
    </div>
  );
}

export default App;
