import "./styles";
import React from "react";
import { useEffect, useState } from "react";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [testData, setTestData] = useState([]);

  useEffect(async () => {
    setLoading(true);
    await fetch("https://opentdb.com/api.php?amount=5&type=multiple")
      .then((res) => res.json())
      .then((data) => setTestData(data.results))
      .catch((e) => console.log(e));
    setLoading(false);
  }, []);

  if (loading) {
    return "Loading Questions";
  }

  return (
    <div>
      {testData.map((item, index) => {
        return (
          <div key={index}>
            <h1>{item.question}</h1>
            <p style={{ marginTop: 20 }}>Answers</p>
            <div>
              {[...item.incorrect_answers, item.correct_answer]
                .sort()
                .map((answerItem, indexx) => {
                  return <p key={indexx}>{answerItem}</p>;
                })}
            </div>
          </div>
        );
      })}
      <button>Check answers</button>
    </div>
  );
};

export default Index;
