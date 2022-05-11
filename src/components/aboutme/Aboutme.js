import profilepic from './profilepic.jpg';
const About = () => {
    return ( 
        <div className='profilepicimage'>
            <img src={profilepic} className="App-logo" alt="logo" width="500"/>
            <div className='p1txt'>
                <p1> Arushan Sinnadurai </p1>
            </div>

            <div className='aboutmetxt'>
                <p1> TXT </p1>
            </div>

        </div>
        
     );
}
 
export default About;