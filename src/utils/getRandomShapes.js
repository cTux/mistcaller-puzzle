import { Shapes } from '../types/Shape';
import { Fill } from '../types/Fill';
import { Wraps } from '../types/Wraps';
import { getRandom } from './getRandom';
import { getId } from './getId';
import { shuffle } from './shuffle';
import { setCorrectShape } from './setCorrectShape';

const randomDataMap = {
  '0': { // Shapes
    '0': Shapes.Flower,
    '1': Shapes.Leaf,
  },
  '1': { // Fill
    '0': Fill.Empty,
    '1': Fill.Shaded,
  },
  '2': { // Wraps
    '0': Wraps.Empty,
    '1': Wraps.Rounded,
  },
};

const randomDataValues = [
  [ 0, 0, 1, 1 ], // Shapes
  [ 0, 0, 1, 1 ], // Fill
  [ 0, 0, 1, 1 ], // Wraps
];

const randomPropertyName = {
  '0': 'shape',
  '1': 'fill',
  '2': 'wrap',
};

export const getRandomShapes = () => {
  const dataValues = [ ...randomDataValues.map(x => shuffle(x)) ],
    randomPropertyIndex = getRandom(0, 2),
    randomValueIndex = getRandom(0, 3);

  const result = [{
    id: getId(),
    shape: '',
    fill: '',
    wrap: '',
    correct: false,
    selected: false,
  }, {
    id: getId(),
    shape: '',
    fill: '',
    wrap: '',
    correct: false,
    selected: false,
  }, {
    id: getId(),
    shape: '',
    fill: '',
    wrap: '',
    correct: false,
    selected: false,
  }, {
    id: getId(),
    shape: '',
    fill: '',
    wrap: '',
    correct: false,
    selected: false,
  }];

  dataValues.forEach((values, xi) => {
    values.forEach((y, yi) => {
      result[yi][randomPropertyName[xi]] = dataValues[xi][yi];
      if (randomPropertyIndex === xi && randomValueIndex === yi) {
        result[yi][randomPropertyName[xi]] ^= 1;
      }
      result[yi][randomPropertyName[xi]] = randomDataMap[xi][result[yi][randomPropertyName[xi]]];
    });
  });

  return setCorrectShape(result);
};
