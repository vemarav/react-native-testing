import {track} from './analytics';

export function addNumbers(x, y) {
  track('addNumbers')
  return x + y;
}