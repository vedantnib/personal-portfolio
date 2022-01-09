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
            description: ["Created a social media use case where employers can connect and write reviews about their former/current employees which can help other employers in security and background checks.","Technologies used: ReactJS, Material UI, NodeJS, ExpressJS, MongoDB."],
            date: "May 2021 - October 2021"
        },
        {
            id: 2,
            name: "Track your movie App",
            description: ["Developed a full-stack cross-platform app where user can keep track of his favorite movies, check upcoming movies using reviews and create his own customizable “watch later” movies list.","Technologies used: Flutter, Sqflite, Movie Database API."],
            date: "February 2021 - March 2021"
        },
        {
            id: 3,
            name: "Liveness Prediction on video feed",
            description: ["Instituted a model for an application that performs a liveness check on the video feed obtained from a proctored test to identify cheating using Computer vision and CNN.","Technologies used: Flutter, Google Cloud Storage, Keras, TensorFlow, Google Compute Engine, OpenCV."],
            date: "July 2020 - August 2020"
        },
        {
            id: 4,
            name: "Adblocker for Real/Fake images",
            description: ["Created an adblocker that can learn to classify images on a web page as banner advertisements or page content using Ensemble Learning methods.","Technologies used: Python, Scikit-Learn, Pandas."],
            date: "June 2020 - June 2020"
        },
        {
            id: 5,
            name: "Titanic Disaster Prediction (Kaggle)",
            description: ["Developed a Machine Learning model that predicts if a passenger on the Titanic survived or not based on the metadata in the Dataset.","The model was trained on Kaggle’s dataset and used Random Forest Classifier to make predictions.","Predictions made by the model ranked in the top 22% in the competition leaderboard.","Technologies used: Python, Scikit-Learn, Numpy, Pandas."],
            date: "May 2020 - May 2020"
        },
        {
            id: 6,
            name: "Personality Prediction using Signature Analysis",
            description: ["Built a web-app that can be used by graphologists to predict the personality traits of a candidate when the candidate submits a picture of his signature using Computer Vision technologies.","Technologies used: HTML, JavaScript, Python, TensorFlow, Google Compute Engine."],
            date: "July 2019 - January 2020"
        },
        {
            id: 7,
            name: "Inventory Management System",
            description: ["Implemented a centralized inventory application that can be used by retailers to keep track of items in the store and digitize the inventory management experience. ","Technologies used: HTML, CSS, JavaScript, NodeJS, ExpressJS, Google Firebase."] ,
            date: "March 2019 - May 2019"
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