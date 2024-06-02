import './App.css';
// import Header from './Components/Header';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Projects from './pages/Projects/Projects';
import EducationPage from './pages/EducationPage';
import ContactPage from './pages/ContactPage';
import SkillsPage from './pages/SkillsPage';



function App() {
  return (
    // <>
    // <Header/>
    // <HomePage/>
    // </>
<Router>
  <div>
    <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<EducationPage/>} />
          <Route path='/skills' element={<SkillsPage/>} />
          <Route path='/contact' element={<ContactPage/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
