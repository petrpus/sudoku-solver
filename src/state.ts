import { atom, atomFamily, selector, selectorFamily } from 'recoil';
import { getIndex } from './utils';

export const valueFamily = atomFamily({
  key: 'values',
  default: 0,
});

export const cursorState = atom<number | null>({
  key: 'coursor',
  default: null,
});

export const fixedCountState = selector({
  key: 'fixedCount',
  get: ({ get }) => {
    let count = 0;
    for (let br = 0; br < 3; br++) {
      for (let bc = 0; bc < 3; bc++) {
        for (let sr = 0; sr < 3; sr++) {
          for (let sc = 0; sc < 3; sc++) {
            const value = get(valueFamily(getIndex(br, bc, sr, sc)));
            if (value > 0) {
              count++;
            }
          }
        }
      }
    }
    return count;
  },
});

export const solvedState = selector({
  key: 'solved',
  get: ({ get }) => {
    const fixed = get(fixedCountState);
    return fixed == 27;
  },
});

export const solvingState = atom({
  key: 'solving',
  default: false,
});

export const rowFamily = selectorFamily({
  key: 'rows',
  get:
    (rowIndex: number) =>
    ({ get }) => {
      const row = [];
      for (let x = 0; x < 9; x++) {
        row.push(get(valueFamily(9 * rowIndex + x)));
      }
      return row;
    },
});

export const colFamily = selectorFamily({
  key: 'columns',
  get:
    (rowIndex: number) =>
    ({ get }) => {
      const col = [];
      for (let x = 0; x < 9; x++) {
        col.push(get(valueFamily(9 * x + rowIndex)));
      }
      return col;
    },
});
