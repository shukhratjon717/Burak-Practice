interface GetDigits {
  str: string;
  nums: string;
}

function findNums(str: string): GetDigits{
  const step1 = str.match(/\d/g);
  const step2 = step1 ? step1.join("") : "";
  return {str: "final output", nums: step2}
}

const result = findNums("hello3323wo7r1l7d")
console.log(result.str, result.nums)