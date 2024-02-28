function collection(nums:any) {
    let posNums = [];
  for(let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      posNums.push(nums[i]);
     const result = posNums.join("")
     return result
    }
   
  }
    
}
   collection([-1, 4, -6, 7, 66])



   /* Project Standards
    1- Logging Standards
    2- Naming Standards (
        camel case: function methods varible names      goHome
        pascal case: class,                             MemberService
        kebab case: folders
        snake case: css)
    3- Error Handling
    4- 
   
   */