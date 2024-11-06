// src/app/step1.jsx
"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Answers from "./answers";
import { useProgress } from "../context/ProgressContext";
import { useAnswers } from "../context/AnswerContext"; 

const StepOne = () => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const { setCurrentPage } = useProgress();
  const { saveAnswer } = useAnswers(); 
  const isButtonDisabled = selectedAnswers.length === 0;

  useEffect(() => {
    setCurrentPage(1);
  }, [setCurrentPage]);

  const handleContinue = () => {
    saveAnswer(1, selectedAnswers); 
  };

  return (
    <div className="wrapper">
      <div className="wrapper__container">
        <Header stepBack={true} direct="/" />
        <Sidebar />
        <div className="page-title text">
          What negative effects do you experience due to procrastination?
        </div>
        <Answers
          selectedAnswers={selectedAnswers}
          setSelectedAnswers={setSelectedAnswers}
        />
        <div className="button-block">
          <Link href="/step2" onClick={handleContinue}>
            <button className="button-continue" disabled={isButtonDisabled}>
              Continue
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
