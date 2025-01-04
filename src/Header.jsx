import { Link } from "react-router-dom"


export const Header = () => {
 
  
  return (
       <>
          <div className="row">
          <div className="header col-12 col-md-12 col-sm-6 col-md-12">
                    <h2>Arun pandiyan</h2>
                    <h3>React Developer Fresher</h3>
                    <Link to="/projects">
                       <button >Projects</button>
                    </Link>
                    
                    <div className="img">
                    <img src="assets/head.png" alt="img" width={"300px"}/>
                    </div>
            </div>
          </div>  
        
       </>
       
  )
}
