import React, { Component } from 'react';
import * as cn from 'classnames';
import './App.css';
import { Flower } from '../Flower';
import { Leaf } from '../Leaf';
import { getRandomShapes } from '../../utils/getRandomShapes';
import { Fill } from '../../types/Fill';
import { Wraps } from '../../types/Wraps';

const ComponentsMap = {
  flower: Flower,
  leaf: Leaf,
};

export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: getRandomShapes(),
    };
  }

  handleSymbolCheck(id) {
    this.setState({
      items: this.state.items.map(x => {
        const result = { ...x };
        if (result.id === id || result.correct === true) {
          result.selected = true;
        }

        return result;
      }),
    }, () => setTimeout(() => this.newRound(), 1000));
  }

  newRound() {
    this.setState({
      items: getRandomShapes(),
    });
  }

  render() {
    return (
      <div className={'app'}>
        <div className={'description'}>
          Mistcaller Puzzle contains three different options to generate a symbol: Shape, Shade, Border.<br />
          Possible shapes values: Flower, Leaf.<br />
          Possible shade values: Transparent, Shaded.<br />
          Possible border values: No border, Border.<br />
        </div>
        <div className={'shapes'}>
          {
            this.state.items.map(x => {
              const Component = ComponentsMap[x.shape],
                props = {
                  shaded: x.fill === Fill.Shaded,
                  rounded: x.wrap === Wraps.Rounded,
                };

              return (
                <div key={x.id} className={cn('shape', {
                  selected: x.selected,
                  correct: x.correct,
                })} onClick={() => this.handleSymbolCheck(x.id)}>
                  <Component { ...props } />
                </div>
              );
            })
          }
        </div>
        <div className={'description'}>
          Unique symbol means that another symbols have different values for only one of options.<br />
          Examples: Only one flower, only one with shade or only one without border.<br />
          <br />
          Try to find a unique one!<br />
        </div>
      </div>
    );
  }
}
