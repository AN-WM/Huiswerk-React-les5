import React from 'react';
import './RedditHeader.css';
import {NavLink} from "react-router-dom";

function RedditHeader({children}) {

    return (
        <header>
            <div className="standard-container">
                <nav>
                    <div className="navlink-container">
                        <NavLink to={"/"}
                                     className="navlink">
                            hottest posts
                        </NavLink>
                        <NavLink to={"/"}
                                     className="navlink">
                            reddit
                        </NavLink>
                        <NavLink to={"/"}
                                     className="navlink">
                            memes
                        </NavLink>
                    </div>
                </nav>

                <div className="header-container">
                {children}
                </div>

            </div>
        </header>
    );
}

export default RedditHeader;