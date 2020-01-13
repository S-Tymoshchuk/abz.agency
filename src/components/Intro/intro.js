import React from "react";

const Intro = () => {
    return (
        <div className={"intro"}>
            <div className="container">
                <div className="intro__inner">
                    <div className="intro__inner--title">
                        Test assignment for Frontend Developer position
                    </div>
                    <div className={"intro__inner--text"}>
                        We kindly remind you that your test assignment should
                        be submitted as a link to github/bitbucket repository.
                    </div>
                    <div className="intro__inner--subtext">
                        Please be patient, we consider and respond to every application that meets minimum requirements.
                        We look forward to your submission. Good luck!
                    </div>
                    <a href={"#"} className={"btn btn-primary"}>Sign Up</a>
                </div>
            </div>
        </div>
    );
};

export default Intro;