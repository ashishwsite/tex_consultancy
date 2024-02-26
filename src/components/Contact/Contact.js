import React from "react";
import Form from "../Form/Form";

const Contact = () => {
  return (
    <>
   <h1 style={{textAlign:'center'}}>Contact_us</h1>
    <div style={{ display: "flex", justifyContent: "center" }}>
      <form className="row contact-form" style={{marginLeft:"15px"}} action="#">
        <div><img
        className="w-100 img-fluid " style={{height:'50vh' ,opacity:'0.2'}}
        src="https://www.onlinetaxfiler.com/assets/front_end2/assets/img/contact/contact-jpg.jpg"
        alt="Img"
      /></div>
         <diV><Form/></diV>
      </form>
    </div>
    </>
  )
};

export default Contact;
