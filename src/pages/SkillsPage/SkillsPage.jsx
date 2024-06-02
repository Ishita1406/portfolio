import ProgressBar from "../../Components/ProgressBar";
import { useEffect, useState } from "react";
import Header from "../../Components/Header";
import './SkillsPage.css'
import Footer from "../../Components/Footer";

function SkillsPage () {

    const [percentage, setPercentage] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setPercentage((prev) => (prev < 100 ? prev + 10 : 100));
    }, 1000)

    return () => clearInterval(interval);
  })

    return (
        <>
        <Header/>
        <div className="skills">
            <div className="imgParent">
                <img src="https://ajitverma15.github.io/Interactive-Portfolio/Image/Skills.svg" alt="skillsImg"/>
            </div>
            <div className="progressBarParent">
                <h2>Proficiency</h2>
                <ProgressBar 
                    percentage= {85}/>
                <ProgressBar
                    percentage={80}/>
                <ProgressBar
                    percentage={80}/>
                <ProgressBar
                    percentage={90}/>
                <ProgressBar
                    percentage={70}/>
                <ProgressBar
                    percentage={65}/>
                <ProgressBar
                    percentage={80}/>
            </div>
        </div>
        <Footer/>
        </>
    );
}
export default SkillsPage;