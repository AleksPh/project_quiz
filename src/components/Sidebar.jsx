import React from 'react';
import { useProgress } from '../app/context/ProgressContext';

function Sidebar() {
  const { currentPage, totalPages } = useProgress();
  const progress = (currentPage / totalPages) * 100;

  return (
    <div className="sidebar">
      <div className="progress-bar">
        <div className="progress-fill" style={{ width: `${progress}%` }} />
      </div>
      <div className="progress-steps">
        {Array.from({ length: totalPages }).map((_, index) => (
          <div
            key={index}
            className={`progress-step ${index < currentPage ? 'completed' : ''}`}
          />
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
