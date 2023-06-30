import type { Index } from '../types';
import Section from './Section';
import { useRecoilValue } from 'recoil';
import { fixedCountState } from '../state';
import './Board.css';

const Board = () => {
  const INDEX: [Index, Index, Index] = [0, 1, 2];
  const fixedCount = useRecoilValue(fixedCountState);

  return (
    <>
      <div className="board">
        {INDEX.map((r) =>
          INDEX.map((c) => (
            <Section boardRow={r} boardCol={c} key={3 * r + c} />
          ))
        )}
      </div>
      <div>{fixedCount ? fixedCount : 0}</div>
    </>
  );
};

export default Board;
