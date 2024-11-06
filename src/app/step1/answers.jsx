"use client"; 

import React, { useState } from "react";
import answers from "../answers/step1"; 

const Answers = ({ selectedAnswers, setSelectedAnswers }) => {
  const handleAnswerChange = (answerId) => {
    setSelectedAnswers((prevSelected) => {
      if (prevSelected.includes(answerId)) {
        return prevSelected.filter((id) => id !== answerId);
      } else {
        return [...prevSelected, answerId];
      }
    });
  };

  return (
    <div className="quiz-block">
      {answers.map((answer) => (
        <label key={answer.id} className={`quiz-answer custom-checkbox ${selectedAnswers.includes(answer.id) ? "selected" : ""}`}>
          <input
            type="checkbox" 
            value={answer.text}
            checked={selectedAnswers.includes(answer.id)} 
            onChange={() => handleAnswerChange(answer.id)}
            className="radio-hidden"
          />
          <span className="checkbox"></span>
          <span className="emoji">{answer.emoji}</span>  {answer.text} 
        </label>
      ))}
    </div>
  );
};

export default Answers;
