import './App.css';
import { useState } from 'react';


const questions = [
  {
    question: "Which player from Karnataka is part of RCB squad of 2025?",
    options: [
      { answerText: "Manoj Bhandage", isCorrect: true },
      { answerText: "Smaran R", isCorrect: false },
      { answerText: "Manish Pandey", isCorrect: false },
      { answerText: "KL Rahul", isCorrect: false },
    ],
  },  
  {
    question: "Who is the only player to have scored 8k+ runs in IPL as of now?",
    options: [
      { answerText: "Rohit Sharma", isCorrect: false },
      { answerText: "MS Dhoni", isCorrect: false },
      { answerText: "Suresh Raina", isCorrect: false },
      { answerText: "Virat Kohli", isCorrect: true },
    ],
  },
  {
    question: "Who is the winners of Champions Trophy 2025?",
    options: [
      { answerText: "South Africa", isCorrect: false },
      { answerText: "Australia", isCorrect: false },
      { answerText: "NewZealand", isCorrect: false },
      { answerText: "India", isCorrect: true },
    ],
  },
  {
    question: "Who has scored most centuries in all formats of cricket?",
    options: [
      { answerText: "Ricky Ponting", isCorrect: false },
      { answerText: "Sachin Tendulkar", isCorrect: true },
      { answerText: "Virat Kohli", isCorrect: false },
      { answerText: "Jaques Kallis", isCorrect: false },
    ],
  },
  {
    question: "Which among below teams got banned for 2 years in IPL for fixing?",
    options: [
      { answerText: "RCB", isCorrect: false },
      { answerText: "KKR", isCorrect: false },
      { answerText: "CSK", isCorrect: true },
      { answerText: "MI", isCorrect: false },
    ],
  },
]


function App() {

  const [currentQuestion, setQuestion] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOption = (index, isCorrect) =>{
      setAnswered(true);
      setSelectedAnswer(index);
      if(isCorrect){
            setScore(score + 1);
      }
  }

  const nextQuestion = () => { 
    setAnswered(false);
    setSelectedAnswer(null); 
    const nextQuestion =  currentQuestion + 1;
    if(nextQuestion < questions.length){
      setQuestion(nextQuestion);
    }
    else{
      setShowScore(true);
    } 
  }

  

  return (

    <div className="flex justify-center items-center h-screen" id='appBackground'>
    <div className='w-full max-w-lg bg-white p-8 rounded shadow-lg'>
        <div className='p-2 border text-center font-bold mb-2 text-xl '>
          Quiz App
        </div>
        {
          showScore ? <div className='text-center'>You have scored {score} of {questions.length} </div> :  
      <div>

          <div>{questions[currentQuestion].question}</div>

          {questions[currentQuestion].options.map((option, index) => (
            <button className={`block w-full p-2 mt-2 rounded border ${answered ? option.isCorrect ? " bg-green-200  " : selectedAnswer === index ? "bg-red-200" : "" : "" }`} onClick={() => handleAnswerOption(index, option.isCorrect)}>{option.answerText}</button>
          ))}
          <button className={`${answered ? "bg-green-500" : "bg-green-300"} block w-full text-white rounded p-2 mt-1`} onClick={nextQuestion} disabled = {answered ? "" : "disabled"}  >Next Question</button>
          <p className='text-center text-gray-400 text-sm'>Question {currentQuestion + 1} of {questions.length}</p>
      </div>
}
    </div>
    </div>
  );
}

export default App;
