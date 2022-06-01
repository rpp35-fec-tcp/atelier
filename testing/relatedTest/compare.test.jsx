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
      .toBe('<td>Make yourself a morning person</td><td class="description">slogan</td><td>Just jumped over jumpman</td>');
    expect(screen.getAllByRole('row')[2].innerHTML)
      .toBe('<td>Whether you\'re a morning person or not.  Whether you\'re gym bound or not.  Everyone looks good in joggers.</td><td class="description">description</td><td>These stretchy knit shoes show off asymmetrical lacing and a big sculpted rubber midsole. In a nod to adidas soccer heritage.</td>');
    expect(screen.getAllByRole('row')[3].innerHTML)
      .toBe('<td>40.00</td><td class="description">default price</td><td>450.00</td>');
    expect(screen.getAllByRole('row')[4].innerHTML)
      .toBe('<td>Pants</td><td class="description">category</td><td>Kicks</td>');
    expect(screen.getAllByRole('row')[5].innerHTML)
      .toBe('<td>Plastic</td><td class="description">Sole</td><td></td>');
    expect(screen.getAllByRole('row')[6].innerHTML)
      .toBe('<td>100% Cotton</td><td class="description">Fabric</td><td></td>');
    expect(screen.getAllByRole('row')[7].innerHTML)
      .toBe('<td>FullControlSkin</td><td class="description">Material</td><td></td>');
    expect(screen.getAllByRole('row')[8].innerHTML)
      .toBe('<td>Skinny</td><td class="description">Cut</td><td></td>');
    expect(screen.getAllByRole('row')[9].innerHTML)
      .toBe('<td></td><td class="description">Stitching</td><td>Double Stitch</td>');
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
