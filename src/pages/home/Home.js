import React, {useEffect, useState} from 'react';
import axios from "axios";
import PostTile from "../../components/postTile/PostTile";
import RedditHeader from "../../components/redditHeader/RedditHeader";
import './Home.css';
import redditLogo from "../../assets/redditlogo.png";

function Home({error, toggleError}) {
    const [redditPosts, setRedditPosts] = useState({});

    useEffect(() => {
        async function fetchData() {
            toggleError(false);

            try {
                const {data} = await axios.get('https://www.reddit.com/hot.json?limit=15');
                setRedditPosts(data.data.children);
            } catch (e) {
                console.error(e);
                toggleError(true);
            }

        }

        fetchData();

        // eslint-disable-next-line
    }, []);

    return (
        <>
            <RedditHeader>
                <img src={redditLogo} alt="Reddit logo" id="reddit-logo"/>
                <h1>Reddit</h1>
            </RedditHeader>

            <main>
                <div className="standard-container">
                    <h2>Hottest Posts</h2>
                    <p className="subtitle">on Reddit right now</p>

                    <div className="post-container">
                        {redditPosts.length > 0 && redditPosts.map((post) => {

                            return (
                                <PostTile
                                    data={post.data}
                                    key={post.id}
                                />
                            )
                        })}

                        {error && <p>Sorry, er gaat iets mis!</p>}
                    </div>
                </div>
            </main>
        </>
    );
}

export default Home;