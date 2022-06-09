import React from 'react';
import redditLogo from "../../assets/redditlogo.png";
import './RedditHeader.css';

function RedditHeader() {
    return (
        <header>
            <div className="standard-container">
                <nav>
                    <ul>
                        <li>Hottest posts</li>
                        <li>Reddit</li>
                        <li>Memes</li>
                    </ul>
                </nav>

                <img src={redditLogo} alt="Reddit logo" id="reddit-logo"/>
                <h1>Reddit</h1>
            </div>
        </header>
    );
}

export default RedditHeader;