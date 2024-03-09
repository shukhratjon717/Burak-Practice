<<<<<<< HEAD
interface findbiggest {
  str: string;

}

function findLongest(str: string): findbiggest{
  
    let step1 = str.split(" ");
    let longest = 0;
    let result = '';
    for(let i = 0; i < step1.length; i++) {
      if(longest < step1[i].length) {
        longest = step1[i].length;
        result = step1[i]
      }
    }
    return {"str": result}
  };
  
  console.log(findLongest("Hello world by Steven"))
=======
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


>>>>>>> parent of 670e6ad (feat: create train area)

/* 
Traditional FrontEnd Development (FD) => BSSR = SSR (Admin) => EJS
Modern FrontEnd development (FD)      => SPA( Single Page Application) (USER's appications) => REACT
*/