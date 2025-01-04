

export const Footer = () => {
  return (
      <>
         <div className="row footer">
               <div className="contact col-12 d-flex justify-content-center">
                   <h4>Contact Us</h4>
               </div>
              <div className="linked col-3 d-flex justify-content-center" >
                  <a href="https://www.linkedin.com/in/arun-pandiyan-927081238/" target="_blank"><i className="fa-brands fa-linkedin fa-2xl" style={{color:"rgba(9, 132, 227,1.0)"}}></i></a>
              </div>
              <div className="github col-3 d-flex justify-content-center">
                  <a href="https://github.com/Arunjoshua1410" target="_blank"><i className="fa-brands fa-github fa-2xl" style={{color:"#000"}}></i></a>
              </div>
              <div className="whatsapp col-3 d-flex justify-content-center" >
                  <a href="https://wa.me/918838574431" target="_blank"><i className="fa-brands fa-whatsapp fa-2xl" style={{color:"rgba(39, 174, 96,1.0)"}}></i></a>
              </div>
              <div className="email col-3 d-flex justify-content-center" >
                  <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJlGVVsPPnDvJzsGJhZrXtBDvbskCjxxcLJCnPtLHzRxbpGdFdJTFzFXtqVkCqFgmzcsWpL" target="_blank"><i className="fa-solid fa-envelope fa-2xl" style={{color:"rgba(9, 132, 227,1.0)"}}></i></a>
              </div>
              <div className="copy col-12 d-flex justify-content-center">
                   <h6>Designed By Arun Copy Right's&copy;</h6>
               </div>
         </div>
      </>
  )
}
