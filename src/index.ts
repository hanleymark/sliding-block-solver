import Board from './Board';
import displayBoard from './helpers/displayBoard';

const board = new Board('173520648');

console.log(`Board as string: ${board.boardAsString()}`);
console.log(`Tile at row 0, column 0: ${board.tileAt(0, 0)}`);
console.log(`Tile at row 2, column 1: ${board.tileAt(2, 1)}`);

console.log(displayBoard(board));
