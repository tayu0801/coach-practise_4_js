const array = [2020, 2021];

function leapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
    return true;
  }
  return false;
}

array.forEach(function (element) {
  let isLeapYear;
  isLeapYear = leapYear(element);
  if (isLeapYear) {
    console.log(element + '年は「うるう年」です');
  } else {
    console.log(element + '年は「うるう年」ではありません');
  }
});
