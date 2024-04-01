
class GameOfLife {
  private rows: number;
  private cols: number;
  private grid: boolean[][];

  constructor(rows: number, cols: number) {
    this.rows = rows;
    this.cols = cols;
    this.grid = Array(rows).fill(null).map(() => Array(cols).fill(false));
    this.randomlySeedGrid();
  }

  private randomlySeedGrid() {
    this.grid = this.grid.map(row => row.map(() => Math.random() > 0.333));
  }

  public resize(rows: number, cols: number) {
    if (rows === this.rows && cols === this.cols) {
      return;
    }

    const oldGrid = this.grid;
    const newGrid = Array(rows).fill(null).map(() => Array(cols).fill(false));

    for (let i = 0; i < Math.min(rows, this.rows); i++) {
      for (let j = 0; j < Math.min(cols, this.cols); j++) {
        newGrid[i][j] = oldGrid[i][j];
      }
    }

    this.rows = rows;
    this.cols = cols;
    this.grid = newGrid;
  }

  public step(tick: number) {
    console.log(`Step ${tick}`);

    if (tick === 0) {
      this.randomlySeedGrid();
      return;
    }

    const newGrid = this.grid.map(row => row.slice());
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        const neighbors = this.countNeighbors(i, j);
        if (this.grid[i][j]) {
          newGrid[i][j] = neighbors === 2 || neighbors === 3;
        }
        else {
          newGrid[i][j] = neighbors === 3;
        }
      }
    }
    this.grid = newGrid;
  }

  private countNeighbors(row: number, col: number) {
    let count = 0;
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (i >= 0 && i < this.rows && j >= 0 && j < this.cols && !(i === row && j === col)) {
          count += this.grid[i][j] ? 1 : 0;
        }
      }
    }
    return count;
  }

  public getGrid() {
    return this.grid;
  }
}

export default GameOfLife;