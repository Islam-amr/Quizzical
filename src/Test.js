import './App.css';
import React from "react"


export default function Test(){
    const [test , setTest] = React.useState([])

     React.useEffect(()=>{
        fetch("https://opentdb.com/api.php?amount=5&type=multiple")
        .then(res => res.json())
        .then(data =>  setTest(data))
        
    }, [])
    //console.log(test.results)
    
   

  
   
    let allAnswers = test.results?.map(a => {
      return([...a.incorrect_answers,a.correct_answer])
    })
    //console.log(allAnswers)

    let allQuestions = test.results?.map(q => {
      return(q.question)
    })
    console.log(Array.isArray(allQuestions))

   

    function TestElements(){
      let testE = <p>Hi</p>
      /*for(let i=0;i<allQuestions.length;i++){
        console.log(allQuestions[i])
      }*/
        
      return testE
      //console.log(testE)
    }
    
    TestElements()

    return(<div className="Test">
      
      <TestElements/>
      
    

    <button>Check answers</button>
  </div>
  )

}
//{testElements}
//<h1>Test</h1>
//{ans.map(a => {return(<p>{a}</p>)})}

/*{q.incorrect_answers.map(a=><p>{a}</p>)}
          {q.correct_answer}*/



          /*return (<div className='test-elements'>
        <h1 key={q.question}>{q.question}</h1>
        <span>
          {allAnswers.map(ans =>{return(<p>{ans}</p>)})}
        </span>
        </div>
        )*/
          