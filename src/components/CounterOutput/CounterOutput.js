import React from 'react';

import './CounterOutput.css';

const counterOutput = (props) => (
    <div className="CounterOutput">
        Current Result: {props.value}
    </div>
);

export default counterOutput;