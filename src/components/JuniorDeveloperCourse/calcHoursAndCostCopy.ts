// Find Sum of Array
export const findSumOfArray = (arrayOfNumbers:[]) => {
      let sum = 0;
      for (let i = 0; i < arrayOfNumbers.length; i++) {
      sum += arrayOfNumbers[i];
      }
      return sum;
  };
  
// Calculate Hours and Cost of Courses
export const calcHoursAndCost = (projects:[], level:string) => {
    
    let projectHours:[] = [];

    projects.forEach((project:Project) => {

        let projectCost:any = project.approximateCost;
    
        let hoursArray:any = findSumOfArray(projectHours);
        let costArray:any = findSumOfArray(projectCost);
    
        localStorage.setItem(`${level} Hours`, hoursArray);
        localStorage.setItem(`${level} Cost`, costArray);
    });
};