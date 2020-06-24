import React, { useReducer } from 'react';
import numberReducer from './NumberReducer';

function Child2() {
    let [initialNumber, toChange] = useReducer(numberReducer, 155);
    return (
        <div>
            Hello Child 2 {initialNumber}
            <br />
            <button onClick={() => { toChange({ type: "INCREMENT", val: 50 }); }}>INCREASE No.</button>
            <button onClick={() => { toChange({ type: "DECREMENT", val: 100 }); }}>DECREASE No.</button>
        </div>
    );
}

export default Child2;