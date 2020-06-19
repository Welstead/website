import React, { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0);

    const clickButton = () => {
        let tempCounter = counter; 
        tempCounter = tempCounter +1;
        setCounter(tempCounter);
    }
    const clickButton2 = () => {
        let tempCounter = counter; 
        tempCounter = tempCounter -1;
        setCounter(tempCounter);
    }

    return (
        <div>
            <button onClick={clickButton}>+1</button>
            <button onClick={clickButton2}>-1</button>
            <h1>{counter}</h1>
        </div>
    );
}

export default Counter;
