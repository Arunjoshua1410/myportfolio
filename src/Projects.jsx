import { Link } from "react-router-dom"


export const Projects = () => {
  return (
      <>
        <div className="project row">
             <div className="headpro col-12">
                 <h1 className="d-flex justify-content-center">My Projects</h1>
                 
             </div>
             <div className="frame col-4 d-flex justify-content-center">
                  <iframe src="https://tamilnaduebbillcalculatorhome.netlify.app/" frameborder="0" width={"800px"} height={"500px"}></iframe>
            </div>
            <div className="ebbill col-4  d-flex justify-content-center">
                  <iframe src="https://bodymassindexproject.netlify.app/" frameborder="0" width={"800px"} height={"500px"}></iframe>
                 
            </div>
            <div className="ebbillbt col-4">
                  <iframe src="https://spicyhuttwebsite.netlify.app/" frameborder="0" width={"800px"} height={"500px"}></iframe>
            </div>
            <div className="bmi col-4">
                  <h6>To see the Full View Of the site Click the Button</h6>
                  <button ><a href="https://tamilnaduebbillcalculatorhome.netlify.app/" target="_blank" rel="noreferrer"  className="btn-link">EB Bill project</a></button>
             </div>
             <div className="bmi col-4">
                  <h6>To see the Full View Of the site Click the Button</h6>
                  <button ><a href="https://bodymassindexproject.netlify.app" target="_blank" rel="noreferrer"  className="btn-link">Body Mass Index project</a></button>
             </div>
             <div className="bmi col-4">
                  <h6>To see the Full View Of the site Click the Button</h6>
                  <button ><a href="https://spicyhuttwebsite.netlify.app/" target="_blank" rel="noreferrer" className="btn-link">Commercial project</a></button>
             </div>
             <div className="exit  col-12">
                   <Link to="/">
                      <button>Home Page</button>
                   </Link>
                  
              </div>
        </div>
       
      </>
  )
}
