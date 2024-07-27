var expect = function (val) {
  let toBe = function (num) {
    if (val === num) {
      return true;
    } else {
      throw new Error("Not Equal");
    }
  };
  let notToBe = function (num) {
    if (val !== num) {
      return true;
    } else {
      throw new Error("Not Equal");
    }
  };
  return { toBe, notToBe };
};

let result = expect(5);

console.log("result", result.toBe(5));
console.log("result", result.notToBe(5));
