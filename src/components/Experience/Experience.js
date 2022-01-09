import { VerticalTimeline } from "react-vertical-timeline-component";
import 'react-vertical-timeline-component/style.min.css';
import ExpCard from "./ExpCard";
import './Experience.css';

const Experience = () => {
    const experiences = [
        {
            id: 1,
            title: "Software Development and Machine Learning Engineer",
            description: ["Developed a load balancer to efficiently distribute incoming requests across virtual machine instances which brought down latency by approximately 30%.","Proposed and accomplished a serverless backend architecture along with a team of 4 which reduced maintenance costs by 80%.","Introduced Continuous Integration and Continuous Deployment on the backend team to ship builds seamlessly.","Led a team of 3 engineers and introduced Test-driven Development (TDD) for testing robustness of code.","Ensured effective data operations by developing microservices in JavaScript to decouple Frontend and Databases"],
            company: "Cerebranium UG HB",
            date: "November 2020 - April 2021"
        },
        {
            id: 2,
            title: "Machine Learning Intern",
            description: ["Achieved AI-proctoring using Dlib’s 68-point face recognition algorithm.", "Brought down Machine Learning pipeline startup time by 70% by developing Docker containers to package application dependencies.","Minimized potential bugs by writing unit tests for Python APIs and algorithms using the PyTest framework."],
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