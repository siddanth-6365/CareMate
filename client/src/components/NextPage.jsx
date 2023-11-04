import React, { useState, useEffect } from 'react';

function ProgressBar() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (progress < 100) {
        setProgress(progress + 20);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [progress]);

  return (
    <div style={{marginTop:"40px"}}>
      {/* <h1>Progress Bar</h1> */}

      <progress  value={progress} max={100} />
      <div>{progress}% Complete</div>
    </div>
  );
}

export default ProgressBar;
