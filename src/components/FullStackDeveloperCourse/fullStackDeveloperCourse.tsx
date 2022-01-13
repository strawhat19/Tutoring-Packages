import React, {useState, useEffect} from "react";
import calcHoursAndCost from "./calcHoursAndCost";
import { fullStackDeveloperProjects } from "./fullStackDeveloperProjects";
import './styles/courses.css';
import cartContext from "../../contexts/cartContext";
let unParsedcart:string = localStorage.getItem(`Shopping Cart`) || `[]`;
let emptyCart:[] = JSON.parse(unParsedcart);

const FullStackDeveloperCourse: React.FC = () => {

    const [fullStackCost, setFullStackCost] = useState<any>(null);
    const [fullStackHours, setFullStackHours] = useState<any>(null);
    const [fullStackProjects, setFullStackProjects] = useState<any>(null);

    const cartItems = document.querySelector(`.cartItems`);

    useEffect(() => {

        const {projects: fullStackApps, level: fullStackLevel} = fullStackDeveloperProjects;

        calcHoursAndCost(fullStackApps, fullStackLevel);

        setFullStackCost(localStorage.getItem(`Full Stack Developer Cost`))
        setFullStackHours(localStorage.getItem(`Full Stack Developer Hours`))
        setFullStackProjects(fullStackApps.length);

    }, []);

    return (
        // Add Course Form
        <div className="courses fullStackCourses">
            <div className="inner">
                <div className="fullStack course">
                    <aside className="left">
                        <h2 className="fullStack subtitle">Become A {fullStackDeveloperProjects.level}</h2>
                        <p className="fullStack timeAndCost">Time & Cost<span className="value tp"> <i className="fas fa-project-diagram"></i> {fullStackProjects} Projects<i className="fas fa-dollar-sign"></i> {fullStackCost}<i className="fas fa-dollar-sign"></i> {fullStackDeveloperProjects.hourlyRate} Hourly<i className="fas fa-clock"></i>  Approximately {fullStackHours} Hour's</span></p>
                        <p className="fullStack target">Target Goals During This Time<span className="value"> <i className="fas fa-bullseye"></i> {fullStackDeveloperProjects.description}</span></p>
                        <p className="fullStack salary">Target Compensation for this Skill Level<span className="value"> <i className="fas fa-briefcase"></i> {fullStackDeveloperProjects.salary}</span></p>
                        <p className="fullStack techStack">Tech Stack<span className="value"> <i className="fab fa-stack-overflow"></i> {fullStackDeveloperProjects.techStack.description}</span></p>
                    </aside>
                    <div className="right">
                        <div className="fullStack projects">
                            {fullStackDeveloperProjects.projects.map((project,index) => (
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
                                    <div className="index">
                                    <button onClick={(event) => {

                                        let idx:number = event.target.id;

                                        let project:any = fullStackDeveloperProjects.projects[idx];

                                        console.log(project);

                                        emptyCart.push(project);

                                        localStorage.setItem(`Shopping Cart`, JSON.stringify([...new Set(emptyCart)]));

                                        let updatedCart = [... new Set(JSON.parse(localStorage.getItem(`Shopping Cart`)))];

                                        cartItems.innerHTML = updatedCart.length;

                                        let cart = JSON.parse(localStorage.getItem(`Shopping Cart`));
                                        
                                        console.log(cart.length);
                                        if (cart.length > 0) {
                                        document.querySelector(`#cartItems`)?.classList.remove(`hide`);
                                        document.querySelector(`#cartItems`)?.classList.add(`show`);
                                        } else {
                                        document.querySelector(`#cartItems`)?.classList.add(`hide`);
                                        document.querySelector(`#cartItems`)?.classList.remove(`show`);
                                        }

                                        console.log(JSON.parse(localStorage.getItem(`Shopping Cart`)));

                                    }} id={index} className="cart cartButton">+</button>
                                        {index+1}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="techs">
                    Hello
                    {fullStackDeveloperProjects.techStack.technologies.map((tech,index) => (
                        <div key={index+1+`-`+tech} id={tech} className="tech">{tech}</div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FullStackDeveloperCourse