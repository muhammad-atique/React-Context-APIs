import React from 'react';
import Child from './Child';

function Parent() {
    return (
        <div>
            Hello Parent <Child> </Child>
        </div>
    );
}

export default Parent;