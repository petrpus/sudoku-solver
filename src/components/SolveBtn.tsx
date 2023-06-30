import { useEffect } from 'react';
import { useRecoilCallback, useRecoilState, useRecoilValue } from 'recoil';
import { solvingState, solvedState } from '../state';
import useSolve from '../useSolve';

const SolveBtn = () => {
  const solved = useRecoilValue(solvedState);
  const [solving, setSolving] = useRecoilState(solvingState);
  const solve = useRecoilCallback(() => useSolve);
  useEffect(() => solve(), [solving])
  const handlePress = () => {
    setSolving(true);
  };

  return (
    <button disabled={solved || solving} onClick={() => handlePress()}>
      {solving ? 'Solving' : 'Solve'}
    </button>
  );
};

export default SolveBtn;
