import React from 'react';

interface ScoreBlocksProps {
  count: number;
}

const ScoreBlocks: React.FC<ScoreBlocksProps> = ({ count }) => {
  return (
    <div className="flex space-x-1">
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="score-block" />
      ))}
    </div>
  );
};

export default ScoreBlocks;