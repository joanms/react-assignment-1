import React from 'react';

const userInput = (props) => {
    const style = {
        border: '4px solid blue'
    }
    return <input
        type="text"
        style={style}
        onChange={props.changed}
        value={props.currentName} />;
};

export default userInput;