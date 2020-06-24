import React from 'react';
import Child from './Child';
import Child2 from './Chile2';

function Parent() {
    return (
        <div>
            Hello Parent <Child> </Child>
            <Child2></Child2>
        </div>
    );
}

export default Parent;