/* eslint-disable no-undef */
import React from 'react';
import renderer from 'react-test-renderer';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddToOutFit from '../../client/src/components/relatedItems&comparison/addToOutfit';

describe('AddToOutFit Component', () => {
  test('snapshot test', () => {
    expect(renderer.create(<AddToOutFit />).toJSON).toMatchSnapshot();
  });
});
