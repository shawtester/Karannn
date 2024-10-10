// SparkEffect.js
import React, { useEffect } from 'react';
import './SparkEffect.css'; // Import the CSS for spark effect

const SparkEffect = ({ onComplete }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      onComplete();
    }, 2000); // Duration of the spark effect

    return () => clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div className="spark-effect">
      <div className="spark spark-1"></div>
      <div className="spark spark-2"></div>
      <div className="spark spark-3"></div>
      <div className="spark spark-4"></div>
      <div className="spark spark-5"></div>
    </div>
  );
};

export default SparkEffect;
