const lengthOfLIS = require("./lis");
console.log(lengthOfLIS([9, 1, 7, 10, 4, 8, 5, 2]));

describe("length of LIS", () => {
  test("[9,1,7,10,4,8,5,2] to equal [1,4,5]", () => {
    expect(lengthOfLIS([9, 1, 7, 10, 4, 8, 5, 2])).toEqual([1, 4, 5]);
  });
  test("[1,4,3,5,2,6,0] to equal [1,3,5,6]", () => {
    expect(lengthOfLIS([1, 4, 3, 5, 2, 6, 0])).toEqual([1, 3, 5, 6]);
  });
});
