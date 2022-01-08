import Navbar from './components/Navbar/Navbar';
import FrontPage from './components/FrontPage/FrontPage';
import './App.css';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Contact from './components/Contact/Contact';
import Blogs from './components/Blogs/Blogs';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <FrontPage />
      <Projects />
      <Experience />
      <Blogs />
      <Contact/>
    </div>
  );
}

export default App;