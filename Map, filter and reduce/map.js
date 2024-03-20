let num = [1, 2, 3, 4, 5, 6];

const multinum = num.map((num, i, arr) => {
  return num * 3 + i;
});

console.log(multinum);
