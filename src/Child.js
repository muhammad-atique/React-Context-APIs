import React, { useContext } from 'react';
import ValueContext from './ValueContext';

function Child() {
    let valueNumber = useContext(ValueContext);
    return (
        <div>
            Hello Child, your age is {valueNumber}
        </div>
    );
}

export default Child;