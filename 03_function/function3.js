// 매개값으로 number, string, array 사용.
function doItFunction(param) {
  let x = 10;
  let result = param(x);
  console.log(result);
}

const get2Times = (n) => {
  let result = n * 2;
  return result;
};
const get4Times = (n) => {
  let result = n * 4;
  return result;
};

doItFunction(get2Times);
doItFunction(get4Times);
