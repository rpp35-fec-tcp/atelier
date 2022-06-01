/* eslint-disable no-undef */
import calculateRating from '../../client/src/components/relatedItems&comparison/calculateRating';
import Reviews from './fakeDataReviews';

describe('Calculate Rating function', () => {
  test('when ratings are not empty, caluclateRating return correct rating', () => {
    expect(calculateRating(Reviews[0].ratings)).toEqual(3.60);
  });
  test('when ratings are empty, caluclateRating should return -1', () => {
    expect(calculateRating(Reviews[1].ratings)).toEqual(-1);
  });
});
