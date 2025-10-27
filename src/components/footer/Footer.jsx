import React from 'react'
import "./footer.css";
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Daniel.</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                    <a href="#projects" className="footer__link">Projects</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href='https://www.instagram.com/danieljin_/' className='footer__social-link' target="_blank">
                    <i class="uil uil-instagram"></i>
                </a>
                <a href='https://github.com/Danieljin2001' className='footer__social-link' target="_blank">
                    <i class="uil uil-github-alt"></i>
                </a>
                <a href='https://www.linkedin.com/in/daniel-jin-17308a226/' className='footer__social-link' target="_blank">
                    <i class="fa-brands fa-linkedin-in"></i>
                </a>

            </div>
        </div>
    </footer>
  )
}

export default Footer
