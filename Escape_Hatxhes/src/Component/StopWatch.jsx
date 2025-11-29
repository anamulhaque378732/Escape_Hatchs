import { useRef, useState } from 'react';

const StopWatch = () => {

    const [startTime, setStartTime] = useState(null);
    const [now, setNow] = useState(null);
    let intervalRef = useRef(null);


    const handleStart = () => {
        setStartTime(Date.now());

        setNow(Date.now());

        intervalRef.current = setInterval(() => {
            setNow(Date.now())
        }, 10);

    };

    let SecondPassed = 0;
    if (startTime !== null && now !== null
    ) {
        SecondPassed = (now - startTime) / 1000;
    };

    const handleStop = () => {
        clearInterval(intervalRef.current);
    };

    return (
        <div>
            <h1>Time passed : {SecondPassed.toFixed(3)}   </h1>

            <button onClick={handleStart}> Start</button>
            <button onClick={handleStop}> Stop</button>

        </div>
    );
};

export default StopWatch;