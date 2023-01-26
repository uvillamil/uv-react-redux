import { PropTypes } from 'prop-types';
import React from 'react';

const Todo = ({onClick, completed, text, id}) => {
    return (
        <li onClick={onClick}
         style={
            {
                textDecoration: completed ? 'line-throught' : 'none',
                textDecorationColor: completed ? 'green' : 'none',
                color: completed ? 'green' : 'white'
            }
        
        }>
           {id} - {text}
            
        </li>
    );
}
Todo.propTypes = {
    onClick: PropTypes.func.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
}

export default Todo;