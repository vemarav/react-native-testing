import {addNumbers} from '../src/mathUtils'
import {track} from '../src/analytics';

jest.mock('../src/analytics');

it('addNumbers', () => {
  expect(addNumbers(1, 2)).toEqual(3)
  expect(track).toBeCalled()
})