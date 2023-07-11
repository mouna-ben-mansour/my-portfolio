import "./contact.css"
import Phone from "../../img/phone.png";
import Email from "../../img/email.png";
import Adress from "../../img/address.png";
import emailjs  from "@emailjs/browser";
import { useRef, useState, useContext } from "react";
import { ThemeContext } from "../../context";
const Contact = () => {
    const formRef = useRef();
    const [done, setDone] = useState(false);
    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;
    const handleSubmit = (e) => {
        e.preventDefault();
    emailjs.sendForm('service_ltq4ocp', 'template_swyygtw', formRef.current, '5l1Xm2z7avaAtKIY5')
        .then((result) => {
            setDone(true);
        }, (error) => {
            console.log(error.text);
        }); 
    }
     

    return ( 
        <div className="contact">
            <div className="contact-bg"></div>
            <div className="contact-wrapper">
                <div className="contact-left">
                    <h1 className="contact-title">Let's discuss your project</h1>
                    <div className="contact-info">
                        <div className="contact-info-item">
                            <img src={Phone} alt="" className="contact-icon" />
                            +216 52 987 456
                        </div>
                        <div className="contact-info-item">
                            <img src={Email} alt="" className="contact-icon" />
                            mounaben1991@gmail.com
                        </div>
                        <div className="contact-info-item">
                            <img src={Adress} alt="" className="contact-icon" />
                            256 Queen Street, Tunis, Tunisia.
                        </div>
                    </div>
                </div>
                <div className="contact-right">
                    <p className="contact-desc">
                        <b> What's your story?</b> Get in touch. consectetur adipiscing elit, 
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        Ut enim ad minim veniam.
                    </p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
                        <input  style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
                        <input  style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
                        <textarea  style={{backgroundColor: darkMode && "#333"}} rows="5" placeholder="Message" name="message" />
                        <button>Submit</button>
                    </form>
                    { done && "Thank you for the message...."}
                </div>
            </div>
        </div>
     );
}
 
export default Contact;