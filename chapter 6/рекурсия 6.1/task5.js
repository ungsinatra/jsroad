// Задачи на методы массивов и рекурсии
function getStringCount(something) {
  let coutStr = 0;
  Object.values;
  if (something) {
    for (let value of Object.values(something)) {
      if (typeof value === "string") {
        coutStr += 1;
      } else {
        coutStr += getStringCount(value);
      }
    }
  } 
  return coutStr;
}

let obj = {
  first: "1",
  second: "2",
  third: false,
  fourth: ["somthin", "2", 2],
  fifth: null,
  sixth: {
    somthin: "asdasd",
    alll: "true",
  },
};

let arr = ["1", "asdas", ["asda", [["asda"], "asdads"]]];

console.log(getStringCount(obj));
