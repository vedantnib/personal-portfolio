import Navbar from './components/Navbar/Navbar';
import FrontPage from './components/FrontPage/FrontPage';
import './App.css';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';

function App() {
  return (
    <div className='app'>
      <Navbar />
      <FrontPage />
      <Projects />
      <Experience />
    </div>
  );
}

export default App;