import { useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { rowFamily } from '../state';

const Row = (props: { rowIndex: number }) => {
  const row = useRecoilValue(rowFamily(props.rowIndex));
  useEffect(() => {}, [rowFamily]);
  return (
    <div style={{ display: 'flex' }}>
      {row.map((v, i) => (
        <div key={i}>{v}</div>
      ))}
    </div>
  );
};

export default Row;
