"use client"
import React, { createContext, useContext, useReducer } from "react";

const AnswersContext = createContext();

const initialState = {
  answers: {}, 
};

const answersReducer = (state, action) => {
  switch (action.type) {
    case "SAVE_ANSWER":
      return {
        ...state,
        answers: {
          ...state.answers,
          [action.payload.step]: action.payload.selectedAnswers,
        },
      };
    case "RESET_ANSWERS":
      return initialState;
    default:
      return state;
  }
};

export const AnswersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(answersReducer, initialState);

  const saveAnswer = (step, selectedAnswers) => {
    dispatch({ type: "SAVE_ANSWER", payload: { step, selectedAnswers } });
  };

  const resetAnswers = () => {
    dispatch({ type: "RESET_ANSWERS" });
  };

  return (
    <AnswersContext.Provider value={{ answers: state.answers, saveAnswer, resetAnswers }}>
      {children}
    </AnswersContext.Provider>
  );
};

export const useAnswers = () => {
  return useContext(AnswersContext);
};
