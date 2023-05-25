import React, { useState } from 'react';

function useCounter() {
    const [count, setCount] = useState(0);
    const increment = () => setCount(count + 1);
    return [count, increment];
}

function Counter() {
    const [count, increment] = useCounter();
    return (
        <div>
            <p>Your counter value bu clicking the button is: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default Counter;