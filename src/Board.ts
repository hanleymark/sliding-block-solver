export default class Board {
    public constructor(tileString: string) {
      const size = Math.sqrt(tileString.length);
      if (size < 2 || size > 10 || Math.floor(size) !== size) {
        throw new Error('Invalid tileString length');
      }
      this.size = size;
      // Set up 2D array of nulls
      this.board = Array(size)
        .fill(null)
        .map(() => Array(size).fill(null));
      const tileStringArray = tileString.split('');
      tileStringArray.forEach((value, index) => {
        const row = Math.floor(index / size);
        const col = index % size;
        this.board[row][col] = parseInt(value);
      });
    }
    private board: number[][];
    public size: number;
    public boardAsString(): string {
      return this.board.flat(1).join('');
    }
    public tileAt(row: number, col: number): number {
      if (row > this.size - 1 || row < 0 || col > this.size - 1 || col < 0) {
        throw new Error('Tile does not exist');
      }
      if (Math.floor(row) !== row || Math.floor(col) !== col) {
        throw new Error('Row and col values should be integers');
      }
  
      return this.board[row][col];
    }
    public displayString(): string {
      return this.board.map((row) => row.join('')).join('\n');
    }
  }
  