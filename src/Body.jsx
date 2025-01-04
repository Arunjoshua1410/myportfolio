import { useState } from "react";
import { Link } from "react-router-dom";


export const Body = () => {
  const [showSkills,setShowSkills]=useState(false);
  const toggleSkills=()=>{
        setShowSkills(!showSkills);
  }
  return (
    <>
        <div className="body-container row">
         <div className="intro col-9 col-md-9 col-sm-12 d-flex justify-content-start" >
            <h1>Hi I'm Arun...</h1>
         </div>
          <div className="me col-3 col-md-3 col-sm-12">
              <img src="assets/Arun Image.jpg" alt="" width={"200px"}/>
          </div>
          <div className="skillsbtn col-12 col-md-12 col-sm-12 d-flex-justify-content-center">
               <button onClick={toggleSkills}>Skills-Click Me ↓</button>
          </div>
          <div className={`skills ${showSkills?"show":""} col-6 col-md-6 col-sm-12`}>
            <h3 >Technical Skills</h3>
               <ul>
                   <li>Html5</li>
                   <li>CSS</li>
                   <li>Java Script</li>
                   <li>Bootstrap</li>
                   <li>React Js</li>
               </ul>
             
          </div>
          <div className="navigation navi   d-flex justify-content-center">
                  <Link to="/education">
                      <button className="edubtn col-6">Go To Education Details</button>
                      
                  </Link>
                  <Link to="/projects">
                       <button className="projectbtn col-6">Projects</button>
                  </Link>
          </div>
           
         
     </div>
    </>
  )
}
