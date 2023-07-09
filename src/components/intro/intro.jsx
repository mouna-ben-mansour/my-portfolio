import "./intro.css"
import Me from "../../img/me.jpg"
const Intro = () => {
    return ( 
        <div className="intro">
            <div className="intro-left">
                <div className="intro-left-wrapper">
                    <h2 className="desc">Hello, My name is</h2>
                    <h1 className="name">Ahmed MANSOUR</h1>
                    <div className="intro-title">
                        <div className="intro-title-wrapper">
                            <div className="title-item">Web Developer</div>
                            <div className="title-item">Front End Developer</div>
                            <div className="title-item">React Developer</div>
                            <div className="title-item">Angular Developer</div>
                            <div className="title-item">Writer</div>
                            <div className="title-item">Blogger</div>
                        </div>
                    </div>
                    <div className="intro-desc">
                    I develop services for customers of all functionalities,
                        specializing in creating modern websites, web services and
                        online stores.
                    </div>
                </div>
            </div>
            <div className="intro-right">
                <img src={Me} alt="" className="intro-img"></img>
            </div>
        </div>
     );
}
 
export default Intro;