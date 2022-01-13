import * as React from 'react';
import{useState, useEffect, useContext} from "react";
import calcHoursAndCost from "./calcHoursAndCost";
import {juniorDeveloperProjects}  from "./juniorDeveloperProjects";
import './styles/courses.css';
import cartContext from "../../contexts/cartContext";
let unParsedcart:string = localStorage.getItem(`Shopping Cart`) || `[]`;
let emptyCart = JSON.parse(unParsedcart) || [] as any;

declare global {
    namespace JSX {
        interface IntrinsicElements {
        'person-info': PersonInfoProps
        }
    }
}

interface PersonInfoProps extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> {
    heading: string,
    subHeading: string,
    size?: string
}

const JuniorDeveloperCourse: React.FC = () => {

    const [juniorCost, setJuniorCost] = useState<any>(null);
    const [juniorHours, setJuniorHours] = useState<any>(null);
    const [juniorProjects, setJuniorProjects] = useState<any>(null);

    const cartItems:any = document.querySelector(`.cartItems`);

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
            <h1 className="title">Tutoring Packages</h1>
            <h1 className="title">Practical Programming</h1>
            <div className="inner">
                <div className="junior course">
                    <aside className="left">
                        <h2 className="junior subtitle">Become A {juniorDeveloperProjects.level}</h2>
                        <p className="junior timeAndCost">Total Projects | Approximate Time & Cost<span className="value tp"> <i className="fas fa-project-diagram"></i> {juniorProjects} Projects<i className="fas fa-dollar-sign"></i> {juniorCost}<i className="fas fa-dollar-sign"></i> {juniorDeveloperProjects.hourlyRate} Hourly<i className="fas fa-clock"></i>  Approximately {juniorHours} Hour's</span></p>
                        <p className="junior target">Target Goals During This Time<span className="value"> <i className="fas fa-bullseye"></i> {juniorDeveloperProjects.description}</span></p>
                        <p className="junior salary">Target Compensation for this Skill Level<span className="value"> <i className="fas fa-briefcase"></i> {juniorDeveloperProjects.salary}</span></p>
                        <p className="junior techStack">Tech Stack<span className="value"> <i className="fab fa-stack-overflow"></i> {juniorDeveloperProjects.techStack.description}</span></p>
                    </aside>
                    <div className="right">
                        <div className="junior projects">
                            {juniorDeveloperProjects.projects.map((project:any,index:any) => (
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
                                            {project.technologies.map((tech:any,index:any) => (
                                                <span key={index+1+`-`+tech} id={tech} className="technology"> - {tech}</span>
                                            ))}
                                        </p>
                                    </p>
                                    <div className="index">
                                    <button onClick={(event:any) => {

                                        let target:any = event.target;

                                        let idx:number = target.id;

                                        let project:any = juniorDeveloperProjects.projects[idx];

                                        emptyCart.push(project);

                                        localStorage.setItem(`Shopping Cart`, JSON.stringify([...new Set(emptyCart)]));

                                        let unParsedcart:string = localStorage.getItem(`Shopping Cart`) || `[]`;

                                        let updatedCart = [...new Set(JSON.parse(unParsedcart))] || [] as any;

                                        let cartNum:number = updatedCart.length

                                        cartItems.innerHTML = cartNum;

                                        // let cart = JSON.parse(localStorage.getItem(`Shopping Cart`)) || [] as any;
                                    
                                        if (updatedCart.length > 0) {
                                        document.querySelector(`#cartItems`)?.classList.remove(`hide`);
                                        document.querySelector(`#cartItems`)?.classList.add(`show`);
                                        } else {
                                        document.querySelector(`#cartItems`)?.classList.add(`hide`);
                                        document.querySelector(`#cartItems`)?.classList.remove(`show`);
                                        }

                                        console.log(updatedCart);

                                    }} id={index} className="cart cartButton">+</button>
                                        {index+1}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="techs">
                    {juniorDeveloperProjects.techStack.technologies.map((tech,index) => (
                        <div key={index+1+`-`+tech} id={tech} className="tech">{tech}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default JuniorDeveloperCourse