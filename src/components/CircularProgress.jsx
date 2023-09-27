import React from 'react';

const CircularProgress = ({ percentage , color , textName}) => {
  const dashOffset = 100 - percentage;
  const redArcLength = (percentage / 100) * (2 * Math.PI * 14);

  return (
    <div className="w-24 h-24 relative m-4 text-center">
      <svg
        className="w-full h-full"
        viewBox="0 0 32 32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          className="stroke-current fill-none text-gray-300"
          cx="16"
          cy="16"
          r="14"
          strokeWidth="2"
        />
        <circle
          className={color}
          cx="16"
          cy="16"
          r="14"
          strokeWidth="2"
          strokeDasharray={`${redArcLength} ${100 - redArcLength}`}
          strokeDashoffset={dashOffset}
        />
        <text
          className="text-black text-center"
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          fontSize="6"
        >
          {percentage}%
        </text>
      </svg>
      <p className='text-xs'>{textName}</p>
    </div>
  );
};

export default CircularProgress;
