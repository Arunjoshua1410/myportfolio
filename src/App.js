import { Body } from "./Body"
import { Education } from "./Education";
import { Footer } from "./Footer";
import { Header } from "./Header"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { Projects } from "./Projects";
export const App = () => {
  
  return (
    <>
      
       <BrowserRouter>
         <Header/>
         <Routes>
             <Route path="/" element={<Body/>}/>
             <Route path="/education" element={<Education/>}/>
             <Route path="/projects" element={<Projects/>}/>
         </Routes>
         <Footer/>
       </BrowserRouter>
      
        
    </>
  )
}
