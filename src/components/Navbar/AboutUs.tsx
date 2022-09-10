import { builtinModules } from 'module';
import '../../styles/AboutUs/AboutUs.css';
import '../../styles/Link/Link.css';

const linkStyle = {
    color:"blue",
    textDecoration:"none"
}

function AboutUs () {
    return (
        <div className="about-us">
        <h1>About Us</h1>
        <div className="about-us__section">
            <h2>Credits</h2>
        <p>Front End: <a href="https://www.linkedin.com/in/kamil-sawicki-2017a1242/" >Kamil Sawicki</a></p>
        <p>Back End: <a href="https://www.linkedin.com/in/kamil-sawicki-2017a1242/" >Kamil Sawicki</a></p>
        <p>UI/UX: <a href="https://www.linkedin.com/in/kamil-sawicki-2017a1242/" >Kamil Sawicki</a> & <a href="https://www.facebook.com/sadovsky17">Marcin Sadowski</a></p>
        <p>Graphics: <a href="https://www.facebook.com/sadovsky17">Marcin Sadowski</a></p>
        </div>
        <div className='about-us__section'>
        <h2>Repositories</h2>
        <p><a href="https://github.com/Gosibit/GymBro-backend">Back end</a></p>
        <p><a href="https://github.com/Gosibit/GymBro-frontend">Front end</a></p>

        </div>
        </div>
    )
}

export default AboutUs