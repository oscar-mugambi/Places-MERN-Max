import React, { useCallback, useReducer } from 'react';
import Input from '../../shared/components/FormElements/Input';
import { VALIDATOR_MINLENGTH, VALIDATOR_REQUIRE } from '../../shared/components/util/validators';

import './NewPlace.css';

const formReducer = (state, action) => {
  switch (action.type) {
    case 'INPUT_CHANGE':
      let formIsValid = true;
      for (const inputId in state.inputs) {
        if (inputId === action.inputId) {
          formIsValid = formIsValid && action.isValid;
        } else {
          formIsValid = formIsValid && state.inputs[inputId].isValid;
        }
      }

      return {
        ...state,
        input: {
          ...state.inputs,
          [action.inputId]: { value: action.value, isValid: action.isValid },
        },
      };

    default:
      return state;
  }
};

const NewPlace = () => {
  const [state, dispatch] = useReducer(formReducer, {
    inputs: {
      title: {
        value: '',
        isValid: false,
      },
      description: {
        value: '',
        isValid: false,
      },
    },
    isValid: false,
  });

  const titleInputHandler = useCallback((id, value, isValid) => {}, []);
  const descriptionInputHandler = useCallback((id, value, isValid) => {}, []);

  return (
    <form className='place-form'>
      <Input
        id='title'
        element='input'
        type='text'
        label='Title'
        validators={[VALIDATOR_REQUIRE()]}
        errorText='Please enter a valid title'
        onInput={titleInputHandler}
      />
      <Input
        id='description'
        element='textarea'
        label='Description'
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        errorText='Please enter a valid description'
        onInput={descriptionInputHandler}
      />
    </form>
  );
};

export default NewPlace;
