export const isWinner = (matrix) => {
  if (matrix.length) {
    const n = Math.sqrt(matrix.length);

    // row count
    const row1 = matrix[0] + matrix[1] + matrix[2];
    const row2 = matrix[3] + matrix[4] + matrix[5];
    const row3 = matrix[6] + matrix[7] + matrix[8];

    // coulmn count
    const column1 = matrix[0] + matrix[3] + matrix[6];
    const column2 = matrix[1] + matrix[4] + matrix[7];
    const column3 = matrix[2] + matrix[5] + matrix[8];

    // diagonal count
    const diagonal1 = matrix[0] + matrix[4] + matrix[8];
    const diagonal2 = matrix[2] + matrix[4] + matrix[6];

    if (
      row1 === n ||
      row2 === n ||
      row3 === n ||
      column1 === n ||
      column2 === n ||
      column3 === n ||
      diagonal1 === n ||
      diagonal2 === n
    ) {
      return true;
    }
  }
  return false;
};

/* Allows for any square using CSS property */
export const gridTemplateColumns = (gridArray) => {
  let autoString = "";
  const square = Math.sqrt(gridArray.length);
  for (let i = 1; i <= square; i += 1) {
    autoString += "auto ";
  }
  return autoString;
};
