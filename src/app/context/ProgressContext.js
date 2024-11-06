"use client"; 

import React, { createContext, useContext, useState } from 'react';

const ProgressContext = createContext();

export const ProgressProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 2;

  return (
    <ProgressContext.Provider value={{ currentPage, totalPages, setCurrentPage }}>
      {children}
    </ProgressContext.Provider>
  );
};

export const useProgress = () => {
  return useContext(ProgressContext);
};
