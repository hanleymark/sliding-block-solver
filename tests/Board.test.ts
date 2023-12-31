import Board from '../src/Board';

describe('Board Class', () => {
  const validInput = '123456789';
  const invalidInput = '123'; // Not a perfect square
  let board: Board;

  beforeEach(() => {
    board = new Board(validInput);
  });

  test('should create a board successfully with valid input', () => {
    const board = new Board('123456780');

    console.log(`Board as string: ${board.boardAsString()}`);
    console.log(`Tile at row 0, column 0: ${board.tileAt(0, 0)}`);
    console.log(`Tile at row 2, column 1: ${board.tileAt(2, 1)}`);
    expect(board).toBeDefined();
  });

  test('should have the correct size for a valid input', () => {
    expect(board.size).toBe(3); // 3x3 board for 9 characters
  });

  test('should throw an error for invalid input length', () => {
    expect(() => {
      new Board(invalidInput);
    }).toThrow('Invalid tileString length');
  });

  test('should correctly place values on the board', () => {
    expect(board.tileAt(0, 0)).toBe(1);
    expect(board.tileAt(0, 1)).toBe(2);
    expect(board.tileAt(0, 2)).toBe(3);
    expect(board.tileAt(1, 0)).toBe(4);
  });

  test('boardAsString should return correct string representation', () => {
    expect(board.boardAsString()).toBe(validInput);
  });

  test('tileAt should throw an error for invalid row and column', () => {
    expect(() => board.tileAt(-1, 0)).toThrow('Tile does not exist');
    expect(() => board.tileAt(0, -1)).toThrow('Tile does not exist');
    expect(() => board.tileAt(board.size, 0)).toThrow('Tile does not exist');
    expect(() => board.tileAt(0, board.size)).toThrow('Tile does not exist');
  });

  test('tileAt should throw an error for non integer row or column values', () => {
    expect(() => board.tileAt(1.2, 1.5)).toThrow(
      'Row and col values should be integers',
    );
  });

  test('tileAt should return the correct value', () => {
    expect(board.tileAt(1, 1)).toBe(5); // Middle tile of the 3x3 board
  });
});
