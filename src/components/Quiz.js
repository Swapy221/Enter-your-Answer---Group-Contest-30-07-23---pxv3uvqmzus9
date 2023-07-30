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
  
    if (gameOver) {
      return (
        <div className="game-over-container">
          <h1 className="game-over-heading">Game Over</h1>
          <p className="score-para">Your score: score/questions.length</p>
          <button className="retry-btn">Retry</button>
        </div>
      );
    }
  
    return (
      <div>
        <h1 className="question-text">questionText</h1>
        <input className="answer-input"/><br />
        <button className="submit-btn">Submit</button>
        <p className="attempt-alert">Incorrect. Two attempts remaining.</p>
      </div>
    );
}

export default Quiz;
