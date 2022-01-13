// Find Sum of Array
const findSumOfArray = (arrayOfNumbers) => {
  let sum = 0;
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
  }
  return sum;
};

// Calculate Hours and Cost of Courses
const calcHoursAndCost = (projects, level) => {
  let projectHours = [];
  let projectCost = [];

  projects.forEach((project) => {
    projectHours.push(project.approximateHours);
    projectCost.push(project.approximateCost);

    let hours = findSumOfArray(projectHours);
    let cost = findSumOfArray(projectCost);

    localStorage.setItem(`${level} Hours`, hours);
    localStorage.setItem(`${level} Cost`, cost);
  });

  console.log(`${level} Hours`, localStorage.getItem(`${level} Hours`));
  console.log(`${level} Cost`, localStorage.getItem(`${level} Cost`));
};

export default calcHoursAndCost;
