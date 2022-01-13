import React, {useState, useEffect} from "react";
import sortObjByKeyLength from "./sortObjByKeyLength";
import calcHoursAndCost from "./calcHoursAndCost";
// import {calcHoursAndCost} from "./calcHoursAndCostCopy";
import { juniorDeveloperProjects } from "./juniorDeveloperProjects";
import { fullStackDeveloperProjects } from "./fullStackDeveloperProjects";
import './styles/courses.css';

const Courses: React.FC = () => {

    const [juniorCost, setJuniorCost] = useState<any>(null);
    const [juniorHours, setJuniorHours] = useState<any>(null);
    const [fullStackCost, setFullStackCost] = useState<any>(null);
    const [fullStackHours, setFullStackHours] = useState<any>(null);

    useEffect(() => {

        const {projects: juniorProjects, level: juniorLevel} = juniorDeveloperProjects;
        const {projects: fullStackProjects, level: fullStackLevel} = fullStackDeveloperProjects;

        calcHoursAndCost(juniorProjects, juniorLevel);
        calcHoursAndCost(fullStackProjects, fullStackLevel);
        
        console.log(
          `juniorDeveloperProjects`,
          sortObjByKeyLength(juniorDeveloperProjects)
        );
        console.log(
          `fullStackDeveloperProjects`,
          sortObjByKeyLength(fullStackDeveloperProjects)
        );

        setJuniorCost(localStorage.getItem(`Junior Developer Cost`))
        setJuniorHours(localStorage.getItem(`Junior Developer Hours`))
        setFullStackCost(localStorage.getItem(`Full Stack Developer Cost`))
        setFullStackHours(localStorage.getItem(`Full Stack Developer Hours`))

    }, []);

    return (
        // Add Course Form
        <div className="courses">
            <h1 className="title">No Code Experience to Full Stack Developer - Courses</h1>
            <div className="inner">
                <div className="junior course">
                    <aside className="left">
                        <h2 className="junior subtitle">{juniorDeveloperProjects.level}</h2>
                        <p className="junior cost">{juniorDeveloperProjects.level} Cost<span className="value"> ${juniorCost}</span></p>
                        <p className="junior hours">{juniorDeveloperProjects.level} Time<span className="value"> Approximately {juniorHours} Hour's</span></p>
                        <p className="junior rate">{juniorDeveloperProjects.level} Rate<span className="value"> {juniorDeveloperProjects.hourlyRate}</span></p>
                        <p className="junior goal">Goals During This Time<span className="value"> {juniorDeveloperProjects.goal}</span></p>
                    </aside>
                    <div className="right">
                        <div className="junior projects">
                            {juniorDeveloperProjects.projects.map((project,index) => (
                                <div className="project" id={index+1+`-`+project.approximateCost} key={index+1+`-`+project.approximateCost}>
                                    <div className="pTitleRow">
                                        <a title="Example Demo" href="#" className="projectExample"><i className="fas fa-globe"></i></a>
                                        <h3 className="projectTitle">{project.title}</h3>
                                        <div className="projectData">
                                            <p className="projectTime"><i className="fas fa-clock"></i>{project.approximateHours} Hour(s)</p>
                                            <p className="projectCost"><i className="fas fa-dollar-sign"></i> {project.approximateCost} USD</p>
                                        </div>
                                    </div>
                                    <p className="projectDescription">
                                        <span className="desc">{project.description}</span>
                                        <span className="technologies">
                                            {project.technologies.map((tech,index) => (
                                                <p key={index+1+`-`+tech} id={tech} className="technology">{tech}</p>
                                            ))}
                                        </span>
                                    </p>
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="fullStack course">
                    <h2 className="subtitle">{fullStackDeveloperProjects.level}</h2>
                    <div className="fullStackHours">Full Stack Developer Hours - {fullStackHours} HR's</div>
                    <div className="fullStackCost">Full Stack Developer Cost Hello - ${fullStackCost}</div>
                </div>
          
            </div>
        </div>
    )
}

export default Courses