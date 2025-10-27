import React from 'react'

const Info = () => {
  return (
    <div className="about__info grid">
        <div className="about__box">
            <i class='bxr  bx-briefcase-alt about__icon'  ></i> 
            <h3 className="about__title">Experience</h3>
            <span className="about__subtitle">2+ Years Working</span>
        </div>

        <div className="about__box">
            <i class='bxr  bx-education about__icon'  ></i> 
            <h3 className="about__title">Education</h3>
            <span className="about__subtitle">GPA: 3.7/4.0</span>
        </div>

        <div className="about__box">
            <i class='bxr  bx-translate about__icon'  ></i> 
            <h3 className="about__title">Bilingual</h3>
            <span className="about__subtitle">Korean, English</span>
        </div>
    </div>
  )
}

export default Info
