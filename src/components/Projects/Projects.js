import React from 'react';
import './Projects.css';
import { VerticalTimeline } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import Project from './Project';

const Projects = () => {
    const projects = [
        {
            id: 1,
            name: "Employee Review Application",
            description: "",
            date: ""
        },
        {
            id: 2,
            name: "Track your movie App",
            description: "",
            date: ""
        },
        {
            id: 3,
            name: "Personality Prediction using Signature Analysis",
            description: "",
            date: ""
        },
        {
            id: 4,
            name: "Inventory Management System",
            description: "",
            date: ""
        },

    ]
    return (
        <div className='projects1' id = 'Projects'>
            <div className='container'>
            <br></br>
            <br></br>
                <h1 className="text-start text-dark">
                    Projects
                </h1>
                <br></br>
                <VerticalTimeline
                    animate={true}
                    layout={'1-column-left'}
                    lineColor={'black'}>
                    {projects.map(project => {
                        return <Project
                            name={project.name}
                            description={project.description}
                            date={project.date}
                            link = {project.link} />
                    })}
                </VerticalTimeline>
            </div>
            <br></br>
        </div>
    );
}

export default Projects;