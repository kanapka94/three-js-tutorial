import React, { useReducer } from 'react';

const Counter = () => {
    const [count, dispatch] = useReducer((state, action) => {
        switch (action) {
            case 'increment':
                return state + 1;
            case 'decrement':
                return state - 1;
            default:
                return state;
        }
    }, 0);

    return (
        <div>
            <button onClick={() => dispatch('decrement')}>Zmniejsz</button>
            <div>{count}</div>
            <button onClick={() => dispatch('increment')}>Zwiększ</button>
        </div>
    );
};

export default Counter;