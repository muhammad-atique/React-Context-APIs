import React from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {
    // let [number, setNumber] = React.useState(5);
    let value = 19;
    return (
        < ValueContext.Provider value={value}>
            <div>
                Hello World
                <Parent></Parent>
            </div>
        </ValueContext.Provider>
    );
}

export default App;