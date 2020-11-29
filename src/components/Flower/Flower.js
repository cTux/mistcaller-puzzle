import React from 'react';
import * as cn from 'classnames';
import './Flower.css';

export const Flower = (props) => {
  return (
    <div className={cn('flower', { 'shaded': props.shaded })}>
      <div className={cn({ 'circle': props.rounded })} />
      <div className={'flower-inner'}>
        <div className={'petal'} />
        <div className={'petal'} />
        <div className={'petal'} />
        <div className={'petal'} />
      </div>
    </div>
  );
};
