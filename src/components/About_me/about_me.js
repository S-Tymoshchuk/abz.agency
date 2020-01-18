import React from "react";
import aboutMeImg from "../../img/about_me-1.jpg";
import skils1 from "../../img/skills-1.jpg";
import skils2 from "../../img/skills-2.jpg";
import skils3 from "../../img/skills-3.jpg";

const About_me = () => {
    return (
        <div className={"about__me"}>
            <div className="container">
                <h2 className={"heading__title about"}>Let's get ac quainted</h2>
                <div className="about__me--inner">
                    <div style={{
                        width: "30%",
                        marginRight: "65px"
                    }} className={"about__me--inner-item"}>
                        <img src={aboutMeImg} alt=""/>
                    </div>
                    <div style={{width: "70%"}} className={"about__me--inner-item"}>
                        <div className={"about__me--inner-item-text"}>
                            <div className="about__me--inner-title">
                                I am cool frontend developer
                            </div>
                            <div className="about__me--inner-text subtext">
                                When real users have a slow experience on mobile, they're much less likely to find what
                                they are looking for or purchase from you in the future. For many sites this equates to
                                a huge missed opportunity, especially when more than half of visits are abandoned if a
                                mobile page takes over 3 seconds to load.
                            </div>
                            <div className="about__me--inner-text ">
                                Last week, Google Search and Ads teams announced two new speed initiatives to help
                                improve user-experience on the web.
                            </div>
                            <a className={"about__me-btn"} href="#">Sign Up</a>
                        </div>
                    </div>
                </div>
                <h2 className={"heading__title relations"}>About my relationships with
                    web-development</h2>

                <div className={"about__me--skills"}>
                    <div className="about__me--skills-item first">
                        <div className="about__me--skills-item_img ">
                            <img src={skils1} alt=""/>
                        </div>
                        <div className={"about__me--skills-item_title"}>
                            I'm in love with HTML
                        </div>
                        <div className="about__me--skills-item_text">
                            Hypertext Markup Language (HTML) is the standard markup language for creating web pages and
                            web applications.
                        </div>
                    </div>
                    <div className="about__me--skills-item second">
                        <div className="about__me--skills-item_img">
                            <img src={skils2} alt=""/>
                        </div>
                        <div className={"about__me--skills-item_title"}>
                            CSS is my best friend
                        </div>
                        <div className="about__me--skills-item_text">
                            Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation
                            of a document written in a markup language
                            like HTML.
                        </div>
                    </div>
                    <div className="about__me--skills-item">
                        <div className="about__me--skills-item_img">
                            <img src={skils3} alt=""/>
                        </div>
                        <div className={"about__me--skills-item_title"}>
                            JavaScript is my passion
                        </div>
                        <div className="about__me--skills-item_text">
                            JavaScript is a high-level, interpreted programming language. It is a language which is also
                            characterized as dynamic, weakly typed, prototype-based and multi-paradigm.
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About_me;
