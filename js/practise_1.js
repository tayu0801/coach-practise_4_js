const array = [2, 4, 7, 5, 4, 3, 8];

let filteredArray = array.filter(function (element, index) {
  // 重複を除外
  if (array.indexOf(element) === index) {
    // console.log(value);
    return element;
  }
});

console.log(filteredArray);
