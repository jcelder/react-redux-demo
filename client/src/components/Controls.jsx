import React from 'react';

const Controls = ({ updateCounter }) => (
    <div>
        <button onClick={() => updateCounter('INCREMENT')}>+</button>
        <button onClick={() => updateCounter('DECREMENT')}>-</button>
        <button onClick={() => updateCounter('RESET')}>Reset</button>
    </div>
);

export default Controls;