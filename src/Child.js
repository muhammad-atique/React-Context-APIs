import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child() {
    let valueNumber = useContext(ValueContext);
    console.log("Value is :" + valueNumber);
    return (
        <div>
            Hello Child, your age is {valueNumber[0]}
            <br /><br />
            <button onClick={() => { valueNumber[1](++valueNumber[0]) }}>Update the age</button>
        </div>
    );
}

export default Child;