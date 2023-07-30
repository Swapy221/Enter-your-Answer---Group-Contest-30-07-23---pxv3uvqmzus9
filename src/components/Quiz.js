import React, { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    answer: "Paris",
    score: 1
  },
  {
    question: "What is the largest country in the world?",
    answer: "Russia",
    score: 1
  },
  {
    question: "What is the currency of Japan?",
    answer: "Yen",
    score: 1
  },
  {
    question: "What is the tallest mammal?",
    answer: "Giraffe",
    score: 1
  },
  {
    question: "What is the chemical symbol for gold?",
    answer: "Au",
    score: 1
  }
];

function Quiz() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [answer, setAnswer] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };

  const checkAnswer = () => {
    const formattedUserAnswer = answer.trim().toLowerCase();
    const correctAnswer = questions[questionIndex].answer.toLowerCase();
    
    if (formattedUserAnswer === correctAnswer) {
      setScore(score + questions[questionIndex].score);
      setQuestionIndex(questionIndex + 1);
      setAttempts(0);
      setAnswer("");

      if (questionIndex + 1 >= questions.length) {
        // Game Over
        setGameOver(true);
      }
    } else {
      setAttempts(attempts + 1);

      if (attempts >= 2) {
        setQuestionIndex(questionIndex + 1);
        setAttempts(0);
        setAnswer("");

        if (questionIndex + 1 >= questions.length) {
          // Game Over
          setGameOver(true);
        }
      }
    }
  };

  const handleRetry = () => {
    setQuestionIndex(0);
    setAttempts(0);
    setScore(0);
    setGameOver(false);
    setAnswer("");
  };

  if (gameOver) {
    return (
      <div className="game-over-container">
        <h1 className="game-over-heading">Game Over</h1>
        <p className="score-para">Your score: {score}/{questions.length}</p>
        <button className="retry-btn" onClick={handleRetry}>Retry</button>
      </div>
    );
  }

  return (
    <div>
      {questionIndex < questions.length ? (
        <>
          <h1 className="question-text">{questions[questionIndex].question}</h1>
          <input
            className="answer-input"
            value={answer}
            onChange={handleAnswerChange}
            disabled={attempts >= 2}
          /><br />
          {attempts > 0 && (
            <p className="attempt-alert">Incorrect. {2 - attempts} {attempts === 1 ? 'attempt' : 'attempts'} remaining.</p>
          )}
          {attempts < 2 && (
            <button className="submit-btn" onClick={checkAnswer}>Submit</button>
          )}
        </>
      ) : (
        <p>No more questions.</p>
      )}
    </div>
  );
}

export default Quiz;
