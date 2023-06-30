export const getIndex = (
  boardRow: number,
  boardCol: number,
  sectionRow: number,
  sectionCol: number
) => {
  return 27 * boardRow + 9 * sectionRow + 3 * boardCol + sectionCol;
};

export const getCoordinates = (index: number) => {
  const boardRow = Math.floor(index / 27);
  const sectionRow = Math.floor((index - 27 * boardRow) / 9);
  const boardCol = Math.floor((index - 27 * boardRow - 9 * sectionRow) / 3);
  const sectionCol = index - 27 * boardRow - 9 * sectionRow - boardCol;

  return [boardRow, boardCol, sectionRow, sectionCol];
};
