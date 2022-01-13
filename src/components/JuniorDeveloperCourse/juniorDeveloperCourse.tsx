import React, {useState, useEffect} from "react";
import sortObjByKeyLength from "./sortObjByKeyLength";
import calcHoursAndCost from "./calcHoursAndCost";
// import {calcHoursAndCost} from "./calcHoursAndCostCopy";
import {juniorDeveloperProjects}  from "./juniorDeveloperProjects";
import './styles/courses.css';

const JuniorDeveloperCourse: React.FC = () => {

    const [juniorCost, setJuniorCost] = useState<any>(null);
    const [juniorHours, setJuniorHours] = useState<any>(null);
    const [juniorProjects, setJuniorProjects] = useState<any>(null);

    useEffect(() => {

        const {projects: juniorApps, level: juniorLevel} = juniorDeveloperProjects;

        calcHoursAndCost(juniorApps, juniorLevel);

        setJuniorCost(localStorage.getItem(`Junior Developer Cost`))
        setJuniorHours(localStorage.getItem(`Junior Developer Hours`))
        setJuniorProjects(juniorApps.length);

        // Start Draggable
        // const slider = document.querySelector(`.junior .projects`);
        // console.log(slider);

    }, []);

    return (
        // Add Course Form
        <div className="courses">
            <h1 className="title">^ Temporary Header</h1>
            <h1 className="title">Tutoring Packages</h1>
            <h1 className="title">No Code Experience to Full Stack Developer - Courses</h1>
            <div className="inner">
                <div className="junior course">
                    <aside className="left">
                    <h2 className="junior subtitle">Become A {juniorDeveloperProjects.level}</h2>
                        <p className="junior timeAndCost">Total Projects | Approximate Time & Cost<span className="value tp"> <i className="fas fa-project-diagram"></i> {juniorProjects} Projects<i className="fas fa-dollar-sign"></i> {juniorCost}<i className="fas fa-clock"></i>  Approximately {juniorHours} Hour's</span></p>
                        <p className="junior rate">Tutoring Rate<span className="value"> <i className="fas fa-code"></i> {juniorDeveloperProjects.hourlyRate}</span></p>
                        <p className="junior target">Target Goals During This Time<span className="value"> <i className="fas fa-bullseye"></i> {juniorDeveloperProjects.target}</span></p>
                        <p className="junior salary">Target Compensation for this Skill Level<span className="value"> <i className="fas fa-briefcase"></i> {juniorDeveloperProjects.salary}</span></p>
                    </aside>
                    <div className="right">
                        <div className="junior projects">
                            {juniorDeveloperProjects.projects.map((project,index) => (
                                <div className="project" id={index+1+`-`+project.approximateCost} key={index+1+`-`+project.approximateCost}>
                                    <div className="pTitleRow">
                                        <a title="Example Demo" href={project.demo} className="projectExample"><i className="fas fa-globe"></i></a>
                                        <h3 className="projectTitle">{project.title}</h3>
                                        <div className="projectData">
                                            <p className="projectCost"><i className="fas fa-dollar-sign"></i> {project.approximateCost} USD</p>
                                            <p className="projectTime"><i className="fas fa-clock"></i>{project.approximateHours} Hour(s)</p>
                                        </div>
                                    </div>
                                    <p className="projectDescription">
                                        <span className="desc">{project.description}</span>
                                        <img src={project.picture} alt="Project Example Picture" className="projectPic" />
                                        <p className="technologies">
                                            {project.technologies.map((tech,index) => (
                                                <span key={index+1+`-`+tech} id={tech} className="technology"> - {tech}</span>
                                            ))}
                                        </p>
                                    </p>
                                    <div className="index">{index+1}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JuniorDeveloperCourse