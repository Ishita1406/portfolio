import './ProgressBar.css'

function ProgressBar ({percentage, skill_text}) {
    return (
        <div className="progress-bar-container">
            <div className="progress-bar" style={{width: `${percentage}%`}} >
            <span className="progress-bar-text">{skill_text}</span>
            </div>
        </div>
    );
}

export default ProgressBar;