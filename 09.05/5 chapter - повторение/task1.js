//Party
function getNumberByParty(date, str) {
  let newArr = [];
  if (str === "even") {
    date.filter((el) => {
      if (el % 2 == 0) {
        return newArr.push(el);
      }
    });
  } else if (str === "odd") {
    date.filter((el) => {
      if (el % 2 !== 0) {
        return newArr.push(el);
      }
    });
  }
  return newArr
}

console.log(getNumberByParty([1,2,3,4],'odd'))
