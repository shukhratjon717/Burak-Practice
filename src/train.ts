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

/* 
Traditional FrontEnd Development (FD) => BSSR = SSR (Admin) => EJS
Modern FrontEnd development (FD)      => SPA( Single Page Application) (USER's appications) => REACT
*/