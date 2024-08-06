import React from "react";
import "../css/Footer.css";
import mail from '../assets/mail.png';
import linkedin from '../assets/linkedin.png';
import github from '../assets/github.png';
import leetcode from '../assets/leetcode.png';
import instagram from '../assets/instagram.png';

export default function Footer() {
  const email = 'adityarj1910@gmail.com';

  return (
    <div className="footer">
      <div className="socialbtn">
        <a href="https://github.com/Adityarj1910" target="_blank" rel="noopener noreferrer"><img src={github} alt="GitHub" /></a>
        <a href="https://www.linkedin.com/in/aditya-raj-2261a7285/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="LinkedIn" /></a>
        <a href="https://leetcode.com/u/Adityarj1910/" target="_blank" rel="noopener noreferrer"><img src={leetcode} alt="LeetCode" /></a>
        <a onClick={() => window.location.href = `mailto:${email}`}><img src={mail} alt="Email" /></a>
        <a href="https://www.instagram.com/shotby.adiii/" target="_blank" rel="noopener noreferrer"><img src={instagram} alt="Instagram" /></a>
      </div>
    </div>
  );
}
