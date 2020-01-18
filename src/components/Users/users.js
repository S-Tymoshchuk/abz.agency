import React from "react";
import photoUsers from "../../img/user-noah-2x.jpg";
import photoUsers2 from "../../img/user-adolph-2x.png";
import photoUsers3 from "../../img/user-liam-2x.jpg";
import photoUsers4 from '../../img/user-elizabeth-2x.jpg';
import photoUsers5 from '../../img/user-alexander-2x.jpg';
import photoUsers6 from '../../img/user-mason-2x.jpg';


const Users = () => {
    return (
        <div className={"users"}>
            <div className="container">
                <div className="users__title">
                    <h2 className={"heading__title user-title"}>Our cheerful users</h2>
                    <p className={"users__title--text"}>Attention! Sorting users by registration date</p>
                </div>
                <div className="users__inner">
                    <div className="users__inner--item">
                        <img className={"users__inner--item-photo"} src={photoUsers} alt=""/>
                        <div className={"users__inner--item-text"}>
                            <div className="users__inner--item-title">
                                Noah
                            </div>
                            <div className="users__inner--item-info">
                                Leading specialist of the Control Department noah.controldepartment@gmail.com
                                <div>+38 (050) 678 03 24</div>
                            </div>
                        </div>
                    </div>{/*item*/}
                    <div className="users__inner--item">
                        <img className={"users__inner--item-photo"} src={photoUsers2} alt=""/>
                        <div className={"users__inner--item-text"}>
                            <div className="users__inner--item-title">
                                Adolph Blaine Charles David Earl
                            </div>
                            <div className="users__inner--item-info">
                                The contextual advertising specialist adolph.blainecharles-davidearl@example.com
                                <div>+38 (050) 678 03 24</div>
                            </div>
                        </div>
                    </div>{/*item*/}
                    <div className="users__inner--item">
                        <img className={"users__inner--item-photo"} src={photoUsers3} alt=""/>
                        <div className={"users__inner--item-text"}>
                            <div className="users__inner--item-title">
                                Liamgrievescasey Smith Wiam
                            </div>
                            <div className="users__inner--item-info">
                                Lead designer liamgrievescasey@example.com
                                <div>+38 (050) 273 93 32</div>
                            </div>
                        </div>
                    </div>{/*item*/}
                    <div className="users__inner--item">
                        <img className={"users__inner--item-photo"} src={photoUsers4} alt=""/>
                        <div className={"users__inner--item-text"}>
                            <div className="users__inner--item-title">
                                Elizabeth
                            </div>
                            <div className="users__inner--item-info">
                                Frontend developer elisabet.frontend@gmail.com
                                <div>+38 (095) 924 66 37</div>
                            </div>
                        </div>
                    </div>{/*item*/}
                    <div className="users__inner--item">
                        <img className={"users__inner--item-photo"} src={photoUsers5} alt=""/>
                        <div className={"users__inner--item-text"}>
                            <div className="users__inner--item-title">
                                Alexander
                            </div>
                            <div className="users__inner--item-info">
                                Backend developer alexander.backend@gmail.com
                                <div>+38 (050) 789 24 09</div>
                            </div>
                        </div>
                    </div>{/*item*/}
                    <div className="users__inner--item">
                        <img className={"users__inner--item-photo"} src={photoUsers6} alt=""/>
                        <div className={"users__inner--item-text"}>
                            <div className="users__inner--item-title">
                                Mason
                            </div>
                            <div className="users__inner--item-info">
                                QA mason.qa@gmail.com
                                <div>+38 (095) 283 27 00</div>
                            </div>
                        </div>
                    </div>{/*item*/}
                </div>
                <a className={"btn users-btn"} href="#">Show more</a>
            </div>
        </div>
    );

};

export default Users;