// import React, { useState } from "react";
// import "../css/HamMenu.css";
// import prf from "../assets/profile.gif";
// import log from "../assets/logout.gif";
// import dash from "../assets/dashboard.gif";
// import rep from "../assets/profile.gif";
// import { useContext } from "react";
// // import { AuthContext } from "../AuthContext";
// // import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';

// export default function HamMenu() {
//   const [setting, setSetting] = useState(false);
//   // const { setIsAuthenticated } = useContext(AuthContext);
//   const navigate = useNavigate();

//   // const logoutUser = () => {
//   //   // setIsAuthenticated(false);
//   //   console.log("Logged out");
//   //   setTimeout(() => {
//   //     toast.success("You have successfully logged out!");
//   //   }, 1000);
//   //   navigate('/'); // Navigate to login page after logout
//   // };

//   const home = () => {
//     setSetting(!setting);
//     console.log("Setting");
//     navigate('/'); // Navigate to profile page
//   };
//   const myIntro = () => {
//     setSetting(!setting);
//     console.log("Setting");
//     navigate('/myIntro'); 
//   };
//   const projects = () => {
//     setSetting(!setting);
//     console.log("Setting");
//     navigate('/projects'); 
//   };
//   const blogs = () => {
//     setSetting(!setting);
//     console.log("Setting");
//     navigate('/blogs'); 
//   };
//   const contactMe = () => {
//     setSetting(!setting);
//     console.log("Setting");
//     navigate('/contactMe'); 
//   };

//   return (
//     <>

// <nav role="navigation">
//   <div id="menuToggle">

//     <input type="checkbox" />
    

//     <span></span>
//     <span></span>
//     <span></span>
    

//     <ul id="menu">
//       <div className="prof" onClick={home}><li>Home</li></div>
//       <div className="prof" onClick={myIntro}><li>My Intro</li></div>
//       <div className="prof" onClick={projects}><li>Projects</li></div>
//       <div className="prof" onClick={blogs}><li>Blogs</li></div>
//       <div className="prof" onClick={contactMe}><li>Contact Me</li></div>

//     </ul>
//   </div>
// </nav>
//     </>
//   );
// }
