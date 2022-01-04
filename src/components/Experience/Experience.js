import { VerticalTimeline } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import ExpCard from "./ExpCard";
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: "Software Development and Machine Learning Engineer",
            description: "",
            company: "Cerebranium UG HB",
            date: "November 2020 - April 2021"
        },
        {
            id: 2,
            title: "Machine Learning Intern",
            description: "",
            company: "Cerebranium UG HB",
            date: "August 2020 - November 2020"
        }
    ]
    return (
        <div className="experience bg-dark" id="Experience">
            <div className="container">
                <br></br>
                <h1 className="text-start text-light">
                    Experience
                </h1>
                <br></br>
                <VerticalTimeline
                    animate={true}
                    layout={'1-column-left'}
                    lineColor={'black'}>
                    {experiences.map(experience => {
                        return <ExpCard
                            title={experience.title}
                            description={experience.description}
                            company={experience.company}
                            date={experience.date} />
                    })}
                </VerticalTimeline>
            </div>
        </div>
    );
}

export default Experience;