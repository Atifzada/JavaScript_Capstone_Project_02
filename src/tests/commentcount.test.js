/**
 * @jest-environment jsdom
 */

import commentsCounter from '../modules/commentsCounter.js';

describe('Test Comments Counter', () => {
  const newLine = document.createElement('p');
  const data = [
    {
      comment: 'Hello Poki',
      creation_date: '2023-04-19',
      username: 'Atif',
    },
    {
      comment: 'Hello Poki',
      creation_date: '2023-04-19',
      username: 'Joy',
    },
    {
      comment: 'Nice pokemon!',
      creation_date: '2023-04-20',
      username: 'Nabeel',
    },
  ];

  const counter = commentsCounter(data.length, newLine);

  test('The amount of items = 3', () => {
    expect(counter).toBe(3);
  });
});