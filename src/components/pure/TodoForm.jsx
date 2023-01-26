import React from 'react';
import  PropTypes from 'prop-types';
import { useRef } from 'react';
import { nexText } from 'react'

const TodoForm = ({Submit}) => {
    
    const newText = useRef();

    return (
        <div>
          <h2>Create your TODOs</h2>
          <from onSubmit={(e) => {
            e.preventDefault();
            Submit(newText.current.value);
            nexText.current.value = '';
          }}>
          <input type= 'text' ref={newText}/>
           <button type = 'submit'>
              Create Todo
          </button>
          </from>
            
        </div>
    );
}

TodoForm.propTypes = {
    submit: PropTypes.func.isRequired

}

export default TodoForm;