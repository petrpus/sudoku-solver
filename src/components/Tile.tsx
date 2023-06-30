import './Tile.css';
import type { Index } from '../types';
import { useRecoilState, useRecoilValue } from 'recoil';
import { valueFamily, cursorState, solvingState } from '../state';
import { getIndex } from '../utils';

type TileProps = {
  boardRow: Index;
  boardCol: Index;
  sectionRow: Index;
  sectionCol: Index;
};

const Tile = (props: TileProps) => {
  const { boardRow, boardCol, sectionRow, sectionCol } = props;
  const index = getIndex(boardRow, boardCol, sectionRow, sectionCol);
  const [value, setValue] = useRecoilState(valueFamily(index));
  const [coursor, setCoursor] = useRecoilState(cursorState);
  const solving = useRecoilValue(solvingState);
  const focus = index == coursor;
  const handleClick = () => {
    if (solving) return;
    setCoursor(index);
    setValue(value == 9 ? 0 : value + 1);
  };
  return (
    <div
      className="tile"
      style={{
        backgroundColor: focus ? 'white' : 'inherit',
        color: focus ? 'black' : 'white',
      }}
      onClick={() => handleClick()}
    >
      {value > 0 ? value : ''}
    </div>
  );
};

export default Tile;
