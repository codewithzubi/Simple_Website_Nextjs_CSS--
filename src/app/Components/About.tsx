import React from "react";
import Image from "next/image";
import "../style/About.css"
const About = () => {
  return (
    <div className="about-page">
    <section className="about">
      <div className="container">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          I am a web developer with a passion for creating beautiful and functional
          websites. With years of experience in the industry, I have honed my skills
          in various technologies and frameworks.
        </p>
        <div className="team">
          <div className="team-member">
          <Image src="/pr-1.jpeg" alt="Portrait of team member one" width={500} height={300} />
            
              {/* <img
              alt="Portrait of team member one"
              className="team-member-image"
              src="pr-1.jpeg"
            /> */}
            <h3 className="team-member-name">Zubair Ahmed</h3>
            <p className="team-member-role">Lead Developer</p>
          </div>
          <div className="team-member">
          <Image src="/pr-2.jpeg" alt="Portrait of team member one" width={500} height={300} />
            <h3 className="team-member-name">Rukhsar Nani</h3>
            <p className="team-member-role">Senior Designer</p>
          </div>
          <div className="team-member">
          <Image src="/pr-3.jpeg" alt="Portrait of team member one" width={500} height={300} />
            <h3 className="team-member-name">Aliza Shah</h3>
            <p className="team-member-role">Project Manager</p>
          </div>
        </div>
      </div>
    </section>
  </div>
  
  );
};

export default About;
