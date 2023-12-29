import Board from './Board';

const board = new Board('123456780');

console.log(`Board as string: ${board.boardAsString()}`);
console.log(`Tile at row 0, column 0: ${board.tileAt(0, 0)}`);
console.log(`Tile at row 2, column 1: ${board.tileAt(2, 1)}`);
console.log(`Display board:\n${board.displayString()}`);
