import React from 'react';
import { Button, SimpleButton } from './style';

export default function index({type = 'button', styleType='active', cb, children}) {
  return <Button
    type={type}
    styleType={styleType}
    {...cb}
  >{children}</Button>;
}
