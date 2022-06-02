/* eslint-disable no-unused-expressions */
/* eslint-disable no-undef */
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fakeProductInfos from './fakeDataInfo';
import Compare from '../../client/src/components/relatedItems&comparison/compare';

describe('test Compare component', () => {
  it('show is false, do not render Compare', () => {
    render(<Compare
      show="false"
      comparedProductInfo={fakeProductInfos[0]}
      currentProductInfo={fakeProductInfos[1]}
      changeShow={() => { show = !show; }}
    />);
    expect(screen.getByTitle('modal')).toBeFalsy;
  });

  it('renders modal content correctly', () => {
    render(<Compare
      show="true"
      comparedProductInfo={fakeProductInfos[0]}
      currentProductInfo={fakeProductInfos[1]}
      changeShow={() => { show = !show; }}
    />);
    expect(screen.getByTitle('modal')).toBeTruthy;
    expect(screen.getByRole('table')).toBeTruthy;
    expect(screen.getByTitle('currentTitle').innerHTML).toBe(`${fakeProductInfos[1].name}`);
    expect(screen.getByTitle('comparedTitle').innerHTML).toBe(`${fakeProductInfos[0].name}`);
    expect(screen.getAllByRole('row')[1].innerHTML)
      .toBe('<td>A risky call in the spring or fall</td><td class=\"description\">slogan</td><td>A sneaker dynasty</td>');
    expect(screen.getAllByRole('row')[2].innerHTML)
      .toBe('<td>Low-top panelled buffed leather and mesh sneakers. Sizing embroidered in black at round toe. Tonal lace-up closure. Pull-loop and rubberized style name at padded tongue. Padded collar. Pull-loop at heel collar. Logo embroidered in black at outer side. Tonal treaded rubber sole. Tonal stitching.</td><td class=\"description\">description</td><td>Now where da boxes where I keep mine? You should peep mine, maybe once or twice but never three times. I\'m just a sneaker pro, I love Pumas and shell toes, but can\'t nothin compare to a fresh crispy white pearl</td>');
    expect(screen.getAllByRole('row')[3].innerHTML)
      .toBe('<td>59.00</td><td class=\"description\">default price</td><td>99.00</td>');
    expect(screen.getAllByRole('row')[4].innerHTML)
      .toBe('<td>Kicks</td><td class=\"description\">category</td><td>Kicks</td>');
    expect(screen.getAllByRole('row')[5].innerHTML)
      .toBe('<td>Rubber</td><td class=\"description\">Sole</td><td></td>');
    expect(screen.getAllByRole('row')[6].innerHTML)
      .toBe('<td>FullControlSkin</td><td class=\"description\">Material</td><td></td>');
    expect(screen.getAllByRole('row')[7].innerHTML)
      .toBe('<td>ControlSupport Arch Bridge</td><td class=\"description\">Mid-Sole</td><td></td>');
    expect(screen.getAllByRole('row')[8].innerHTML)
      .toBe('<td>Double Stitch</td><td class=\"description\">Stitching</td><td>Double Stitch</td>');
    expect(screen.getByTitle('button')).toBeTruthy();
    expect(screen.getByTitle('button').innerHTML).toBe('Close');
  });

  it('close button works correctly', async () => {
    render(<Compare
      show="true"
      comparedProductInfo={fakeProductInfos[0]}
      currentProductInfo={fakeProductInfos[1]}
      changeShow={() => { show = !show; }}
    />);
    userEvent.click(screen.getByTitle('button'));
    expect(screen.getByRole('table')).toBeFalsy;
  });
});
