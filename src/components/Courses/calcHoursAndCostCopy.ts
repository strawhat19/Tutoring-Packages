// TypeScript Functions
interface Course {
    level: string;
    hourlyRate: string;
    approximateHours: number;
    approximateCost: string;
    goal: string;
    salary: string;
    techStack: {
        description: string;
        technologies: string[];
    };
    projects: {
        title: string;
        approximateHours: number;
        approximateCost: number;
        description: string;
        technologies: string[];
    }[]; 
  }
  
  interface Projects {
    title: string;
    approximateHours: number;
    approximateCost: number;
    description: string;
    technologies: string[];
  }[];
  
  interface Project {
    title: string;
    approximateHours: number;
    approximateCost: number;
    description: string;
    technologies: string[];
  };
  
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
      let projectCost:[] = [];
  
      projects.forEach((project:Project) => {
  
          let projectHour:any = project.approximateHours;
          let projectCost:any = project.approximateCost;
      
          let hoursArray:any = findSumOfArray(projectHours);
          let costArray:any = findSumOfArray(projectCost);
      
          localStorage.setItem(`${level} Hours`, hoursArray);
          localStorage.setItem(`${level} Cost`, costArray);
      });
  
      console.log(
      `${level} Hours`,
      localStorage.getItem(`${level} Hours`)
      );
      console.log(
      `${level} Cost`,
      localStorage.getItem(`${level} Cost`)
      );
  };