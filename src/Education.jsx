import { Link } from "react-router-dom"


export const Education = () => {
  return (
     <>
         
          <div className="education row">
              
              <div className="details col-6">
                  <h4>College Details</h4>
                     <h6><b>College Name:Syed Ammal Engineering College</b></h6>
                     <h6><b>CGPA:8.5</b></h6>
                
              </div>
              <div className="school col-6">
              <h4>School Details</h4>
                <h6><b>School:Good Will Mat.hr.sec.school</b></h6>
                <h6><b>12th percentage:75%</b></h6>
                <h6><b>10th percentage:80%</b></h6>
              </div>
              <div className="exit  col-6 d-flex justify-content-center">
                   <Link to="/">
                      <button>Home Page</button>
                   </Link>
                
              </div>
           </div>

     </>
  )
}
