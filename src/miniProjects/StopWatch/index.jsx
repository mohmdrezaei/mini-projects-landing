import { useState, useEffect } from "react";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  return (
    <div>
      <h2 className="text-2xl font-[600]">Stopwatch</h2>
      <div
        className="text-xl font-[400] my-7 rounded-full border-7 border-[#d880a6] 
      w-[70px] h-[70px] m-auto flex justify-center items-center"
      >
        {time}s
      </div>
      <button
        className="px-10 py-1 rounded-lg shadow-sm cursor-pointer font-[500] mx-3"
        onClick={startStop}
      >
        {isRunning ? "Stop" : "Start"}
      </button>
      <button
        className="px-10 py-1 rounded-lg shadow-sm bg-[#475962] text-white cursor-pointer font-[500]"
        onClick={reset}
      >
        Reset
      </button>
    </div>
  );
};

export default Stopwatch;
