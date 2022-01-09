import { Button, Container } from 'react-bootstrap';
import './Contact.css'
import { ReactComponent as LinkedIn } from './images/LinkedIn.svg';
import { ReactComponent as Twitter } from './images/Twitter.svg';
import { ReactComponent as Instagram } from './images/Instagram.svg';
import { ReactComponent as Facebook } from './images/Facebook.svg';

const Contact = () => {
    return (
        <>
            <div className="contact bg-dark" id="Contact">
                <Container>
                    <br></br>
                    <h1 className="text-start text-light">
                        Connect with me on
                    </h1>
                    <br></br>
                    <div>
                        <span className='icons'>
                            <a href="https://www.linkedin.com/in/vedantnibandhe/">
                                <LinkedIn className='icon' />
                            </a>
                        </span>
                        <span className='icons'>
                            <a href="https://twitter.com/vedant_nibandhe">
                                <Twitter className='icon' />
                            </a>
                        </span>
                        <span className='icons'>
                            <a href="https://www.instagram.com/vedantnibandhe_/">
                                <Instagram className='icon' />
                            </a>
                        </span>
                        <span className='icons'>
                            <a href="https://www.facebook.com/vedantnibandhe">
                                <Facebook className='icon' />
                            </a>
                        </span>
                    </div>
                    <br></br>
                    <br></br>
                </Container>
            </div>
        </>
    );
}
// return (
//     <div className="contact bg-dark" id="Contact">
//         <Container>
//             <br></br>
//             <h1 className="text-start text-light">
//                 Contact Me!
//             </h1>
//             <br></br>
//             <div className='contact-form'>
//                 <div>
//                     <label>
//                         <span><p className='text-light'>Your Email: </p></span>
//                         <span><input className="emailbox" type="email" /></span>
//                     </label>
//                 </div>
//                 <div>
//                     <label>
//                         <span><p className='text-light'>Subject</p></span>
//                         <span><input className="subject" type="text" /></span>
//                     </label>
//                 </div>
//                 <div>
//                     <Button className = "send-message" variant = "primary" size = "md">
//                         Send
//                     </Button>
//                 </div>
//             </div>
//         </Container>
//     </div>
//     )
// }

export default Contact;