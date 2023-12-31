import Board from '../Board';

const displayBoard = (board: Board): string => {
  const size = board.size;
  const Edge = {
    tl: '\u250c',
    h: '\u2500',
    v: '\u2502',
    tr: '\u2510',
    bl: '\u2514',
    br: '\u2518',
    tm: '\u252c',
    bm: '\u2534',
    lm: '\u251c',
    rm: '\u2524',
    x: '\u253c',
  };

  let gridTop = Edge.tl + Edge.h.repeat(3);
  gridTop += (Edge.tm + Edge.h.repeat(3)).repeat(size - 1);
  gridTop += Edge.tr;
  gridTop += '\n';

  let gridMiddle = (Edge.v + ' # ').repeat(size) + Edge.v + '\n';
  gridMiddle +=
    Edge.lm +
    (Edge.h.repeat(3) + Edge.x).repeat(size - 1) +
    Edge.h.repeat(3) +
    Edge.rm +
    '\n';

  let gridBottom = (Edge.v + ' # ').repeat(size) + Edge.v + '\n';
  gridBottom += Edge.bl + Edge.h.repeat(3);
  gridBottom += (Edge.bm + Edge.h.repeat(3)).repeat(size - 1);
  gridBottom += Edge.br + '\n';

  let grid = gridTop + gridMiddle.repeat(size - 1) + gridBottom;
  const tiles = board.boardAsString();
  let index = 0;
  return grid.replace(/#/g, () => {
    const tile = tiles[index++];
    return tile === '0' ? ' ' : tile;
  });
};

export default displayBoard;
