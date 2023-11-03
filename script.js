// Гринчук Тарас
// Лабораторна робота № 7.3
// Варіант №4

function generateMatrix(rows, cols, min, max) {
   const matrix = [];
   for (let i = 0; i < rows; i++) {
      matrix[i] = [];
      for (let j = 0; j < cols; j++) {
         matrix[i][j] = Math.floor(Math.random() * (max - min + 1)) + min;
      }
   }
   return matrix;
}

function printMatrix(matrix) {
   for (let i = 0; i < matrix.length; i++) {
      console.log(matrix[i].join("\t"));
   }
}

function multiplyPosRows(matrix) {
   let product = 1;
   for (let i = 0; i < matrix.length; i++) {
      if (matrix[i].every((num) => num >= 0)) {
         product *= matrix[i].reduce((prev, next) => prev * next, 1);
      }
   }
   return product !== 1 ? product : "Додатніх рядків немає";
}

function findMaxDiagonalSum(matrix) {
   let maxSum = Number.NEGATIVE_INFINITY;
   let n = matrix.length;

   // Обчислюємо суму для діагоналей нижче головної
   for (let i = 0; i < n; i++) {
      let sum = 0;
      for (let j = 0; j <= i; j++) {
         sum += matrix[i - j][j];
      }
      maxSum = Math.max(maxSum, sum);
   }

   // Обчислюємо суму для діагоналей вище головної
   for (let i = 1; i < n; i++) {
      let sum = 0;
      for (let j = i; j < n; j++) {
         sum += matrix[n - j + i - 1][j];
      }
      maxSum = Math.max(maxSum, sum);
   }

   console.log("Максимальна сума діагоналей: ", maxSum);
}

const k = Number(prompt("k = "));
const n = Number(prompt("n = "));

const matrix = generateMatrix(k, n, -5, 20);
printMatrix(matrix);

console.log("Добуток додатніх рядків: ", multiplyPosRows(matrix));

findMaxDiagonalSum(matrix);
