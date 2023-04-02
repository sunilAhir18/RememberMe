import React from "react";
import './Footer.css'

const Footer=()=>{
  const year=new Date().getFullYear();
    return(
      <>
      <footer className="divmain">
        <p className="divmain-p">Copyright ©{year}</p>
      </footer>
      </>
    )
}
export default Footer;