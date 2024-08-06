import React, { useEffect, useRef } from "react";
import { useNavigate } from 'react-router-dom';
import "../css/HamMenu.css";

export default function HamMenu() {
  const navigate = useNavigate();
  const menuToggleRef = useRef(null);

  const home = () => navigate('/');
  const myIntro = () => navigate('/myIntro');
  const projects = () => navigate('/projects');
  const blogs = () => navigate('/blogs');
  const contactMe = () => navigate('/contactMe');

  const closeMenu = () => {
    if (menuToggleRef.current) {
      menuToggleRef.current.checked = false;
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuToggleRef.current && !menuToggleRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav role="navigation">
        <div id="menuToggle">
          <input ref={menuToggleRef} type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <div className="prof" onClick={home}><li>Home</li></div>
            <div className="prof" onClick={myIntro}><li>My Intro</li></div>
            <div className="prof" onClick={projects}><li>Projects</li></div>
            <div className="prof" onClick={blogs}><li>Blogs</li></div>
            <div className="prof" onClick={contactMe}><li>Contact Me</li></div>
          </ul>
        </div>
      </nav>
    </>
  );
}
