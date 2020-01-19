import React from "react";

const Register = () => {
    return (
        <div className={"register"}>
            <div className="container">
                <div className="users__title">
                    <h2 className={"heading__title user-title"}>Register to get a work</h2>
                    <p>Attention! After successful registration and alert, update the list of users in the block from
                        the top</p>
                </div>
                <div className="register__inner">
                    <form className={"form"} action="">
                        <div className="first__block">
                            <div className="register__inner--item">
                                <label htmlFor="name">Name</label>
                                <input type="text" name={"name"} id={"name"} placeholder={"Your name"}/>
                            </div>
                            <div className="register__inner--item">
                                <label htmlFor="email">email</label>
                                <input type="text" name={"email"} id={"email"} placeholder={"Your email"}/>
                            </div>
                            <div className="register__inner--item">
                                <label htmlFor="phone">Phone</label>
                                <input type="tel" name={"phone"} id={"phone"} placeholder={"+38(__) ___ __ __"}
                                       pattern={"^[\+]{0,1}380([0-9]{9})$"}/>
                            </div>
                        </div>
                        <div className="two__block">
                            <select className={"two__block--select"} name="position" id="">
                                <option value="">Select your position</option>
                            </select>
                            <div className={"two__block--input"}>
                                <input type="text" placeholder={"Upload your photo"}/>
                                <a href={"#"} className={"two__block--btn"}>Upload</a>
                                <p className={"two__block--text"}>File format jpg up to 5 MB, the minimum size of 70x70px</p>
                            </div>
                        </div>
                        <a className={"btn btn__register"} href="#">Sign Up</a>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;