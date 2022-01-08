import { Button, Container } from 'react-bootstrap';
import './Contact.css'

const Contact = () => {
    return (
        <div className="contact bg-dark" id="Contact">
            <Container>
                <br></br>
                <h1 className="text-start text-light">
                    Contact Me!
                </h1>
                <br></br>
                <div className='contact-form'>
                    <div>
                        <label>
                            <span><p className='text-light'>Your Email: </p></span>
                            <span><input className="emailbox" type="email" /></span>
                        </label>
                    </div>
                    <div>
                        <label>
                            <span><p className='text-light'>Subject</p></span>
                            <span><input className="subject" type="text" /></span>
                        </label>
                    </div>
                    <div>
                        <Button className = "send-message" variant = "primary" size = "md">
                            Send
                        </Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Contact;