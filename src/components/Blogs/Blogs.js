import './Blogs.css'
import { VerticalTimeline } from 'react-vertical-timeline-component';
import Blog from './Blog';

const Blogs = () => {
    const blogs = [
        {
            id: 1,
            blogName: "Writing Unit Tests in Python with Pytest",
            description: "When I started the programming journey, I would feel handling corner cases in your code is just useless. I mean, why would the input to my code change? Right? Wrong. In a real environment(i.e app, website, etc) everything is fragile. You need to imagine every possible input that can enter your code. And that is why, usually, when we code in a professional enviroment, we perform something called as Test Driven Development (TDD). Unit Tests are an integral part of TDD, and in this blog I talk about how you can write unit tests in Python with an example.",
            date: "November 2020",
            link: "https://vedantnibandhe.medium.com/writing-unit-tests-in-python-with-pytest-b8712fa31a89"
        }
    ]

    return (
        <div className='blogs' id='Blogs'>
            <div className='container'>
                <br></br>
                <br></br>
                <h1 className="text-start text-dark">
                    Blogs
                </h1>
                <br></br>
                <VerticalTimeline
                    animate={true}
                    layout={'1-column-left'}
                    lineColor={'black'}>
                    {blogs.map(blog => {
                        return <Blog
                            blogName={blog.blogName}
                            description={blog.description}
                            date={blog.date} />
                    })}
                </VerticalTimeline>
            </div>
            <br></br>
        </div>
    );
}

export default Blogs;