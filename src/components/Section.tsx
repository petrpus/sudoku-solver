import { Index } from '../types';
import Tile from './Tile';
import './Section.css';
import { getIndex } from '../utils';

type SectionProps = {
  boardRow: Index;
  boardCol: Index;
};
const Section = (props: SectionProps) => {
  const INDEX: [Index, Index, Index] = [0, 1, 2];

  return (
    <div className="section">
      {INDEX.map((r) =>
        INDEX.map((c) => (
          <Tile
            boardRow={props.boardRow}
            boardCol={props.boardCol}
            sectionRow={r}
            sectionCol={c}
            key={getIndex(props.boardRow, props.boardCol, r, c)}
          />
        ))
      )}
    </div>
  );
};

export default Section;
