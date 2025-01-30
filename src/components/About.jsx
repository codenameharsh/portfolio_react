import Header from "./Header.jsx"
import profile from '../images/profile.jpg' 

export default function AboutMe (){
    return (
        <>
        <div className="about-container">
            <Header/>
            <div className="photo-container">
                <img src={profile} alt="profile image" />
            </div>
            <div className="about">
                <h1>About Me</h1>
                <h4>Me who? Harshitha Rajendran</h4>
                <h6>Or just call me Asha</h6>
            </div>
            
            <div className="about-des">
                <p>
                As a creative and detail-oriented individual with a passion for innovation, I bring a unique blend of artistic and technical skills to the table. With a strong academic foundation in Fashion Technology and Management, complemented by certifications in Front-end Web Development and Full-stack Web Design, I excel at crafting immersive digital experiences that captivate and engage.
                </p>
                <p>My journey began in the fashion industry, where I honed my skills in fashion management, digital designing, and business marketing. However, I soon discovered a growing desire to transition into the world of UI/UX design and front-end web development, where I could leverage my creative skills to design intuitive, user-centered interfaces.</p>
                <p>
                Today, I am a seasoned freelance graphic designer with a proven track record of delivering bespoke visual solutions that meet the unique branding and marketing needs of diverse startups, stores, and entrepreneurs. My expertise spans a wide array of design deliverables, including vector graphics, infographics, logos, business cards, brochures, look-books, and responsive websites.
                </p>
            </div>
            
            <h4>Yesterday's fashion designer turned today's UI/UX enthusiast, I am excited to embark on new challenges and contribute my skills and expertise to drive innovation and excellence.</h4>
            <div className="skills">
                <ul><span>Key Skills:</span>
                    <li>UI/UX Design</li>
                    <li>Front-end Web Development</li>
                    <li>Graphic Design</li>
                    <li>Branding and Identity Design</li>
                    <li>Web Development: HTML, CSS, JavaScript, React, Bootstrap</li>                    
                </ul>
            </div>
        </div>


        </>
    )
}