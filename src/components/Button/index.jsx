import React from 'react';
import { Button } from './style';
import PropTypes from 'prop-types'

function index({type = 'button', styleType='active', cb, children}) {
  return <Button
    type={type}
    styleType={styleType}
    {...cb}
  >{children}</Button>;
}

index.propTypes = {
  type: PropTypes.string,
  styleType: PropTypes.string,
  cb: PropTypes.object,
  children: PropTypes.any
}

export default index