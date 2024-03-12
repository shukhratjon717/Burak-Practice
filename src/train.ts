

interface findVowel {
  num: number;
}
function getVowels(str : string): findVowel {
  let vowelNums = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let char of str) {
   if(vowels.includes(char) ) {
     vowelNums++
   }
  }
 return {num: vowelNums }
}

console.log(getVowels("hello woarld"))



/* 
Traditional FrontEnd Development (FD) => BSSR = SSR (Admin) => EJS
Modern FrontEnd development (FD)      => SPA( Single Page Application) (USER's appications) => REACT
*/