import {
  useRecoilCallback,
  useRecoilState,
  useRecoilValue,
  useSetRecoilState,
} from 'recoil';
import {
  valueFamily,
  rowFamily,
  colFamily,
  solvedState,
  solvingState,
} from './state';

const useSolve = () => {
  //const solved = useRecoilValue(solvedState);

  const setValue = useRecoilCallback(
    ({ set }) =>
      (index: number, value: number) =>
        set(valueFamily(index), value),
    []
  );

  const loadData = () => {
    const testData = [
      1, 2, 3, 4, 5, 6, 0, 8, 9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      0, 0, 0, 0, 0, 0,
    ];
    testData.map((v, i) => setValue(i, v));
  };

  const findMissing = (line: number[]) => {
    for (let x = 0; x < 9; x++) {
      if (!line.includes(x)) {
        return x;
      }
    }
  };
  {
  }
  const emptyCount = (line: number[]) => {
    const count = line.reduce(
      (count: number, v) => (v == 0 ? count++ : count),
      0
    );
    return count;
  };
  const tryRow = (rowIndex: number) => {
    const row = useRecoilValue<number[]>(rowFamily(rowIndex));
    console.log(row);
    if (emptyCount(row) != 1) return;
    const missingValue = findMissing(row);
    console.log('chybí: ', missingValue);
    const index = row.indexOf(0) + rowIndex * 9;
    console.log('index: ', index);
    const setValue = useSetRecoilState(valueFamily(index));
    if (missingValue) setValue(missingValue);
  };

  //while (!solved) {}

  loadData();

  for (let x = 0; x < 9; x++) {
    console.log('zkouším řadu ', x);
    tryRow(x);
  }

  return;
};

export default useSolve;
