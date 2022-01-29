import PropTypes from 'prop-types'
import { InputWrapper } from './style';
import { useState } from 'react';

function index({id, name, value, isRequired, autoComplete = "on", label, cb}) {
  const [focus, setFocus] = useState(false)
  const [notEmpty, setNotEmpty] = useState(false)

  return <InputWrapper isFocus={focus} notEmpty={notEmpty} >
    <label>{label}</label>
    <input 
      id={id} 
      name={name} 
      value={value} 
      {...cb}
      {...(isRequired && {required: true})}
      autoComplete={autoComplete} 
      onFocus={e => {
        setFocus(true)
        setNotEmpty(false)
      }} 
      onBlur={e => {
        setFocus(false)
        e.target.value !== "" && setNotEmpty(true)
      }}
    />
  </InputWrapper>;
}

index.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
}

export default index

