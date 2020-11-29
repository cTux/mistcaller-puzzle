import React from 'react';
import * as cn from 'classnames';
import './Leaf.css';

export const Leaf = (props) => {
  return (
    <div className={cn('leaf', { 'shaded': props.shaded })}>
      <div className={cn({ 'circle': props.rounded })} />
      <div className={'leaf-inner'} />
    </div>
  );
};
