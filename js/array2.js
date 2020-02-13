let arr = [
  {name: "furuya"},
  {name: "maeda"},
  {name: "iwanami"},
  {name: "hori"}
];

console.log(arr);
arr2 = arr.sort();
console.log('======')
console.log(arr2)
arr3 = arr.sort((a,b) => a.name[1] - b.name[1] > 0);
console.log(arr3)


const name = ["furuya", "maeda", "iwanami", "hori"];
console.log(name.sort());

name2 = name.sort((a,b) => a - b > 1).reverse();
console.log(name2);