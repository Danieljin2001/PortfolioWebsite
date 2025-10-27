import React from 'react'
import "./skills.css";
import ProgrammingLanguages from './ProgrammingLanguages';
import WebTechnologies from './WebTechnologies';
import IDEOS from './IDEOS';
import PlatformTools from './PlatformTools';

const Skills = () => {
  return (
    <section className='skills section' id="skills">
        <h2 className="section__title">Skills</h2>
        <span className="section__subtitle">Technical</span>    
        <div className="skills__container container grid">
            <ProgrammingLanguages />
            <WebTechnologies />
            <IDEOS />
            <PlatformTools />

        </div>
    </section>
  )
}

export default Skills
