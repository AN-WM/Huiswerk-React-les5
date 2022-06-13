import React, {useEffect, useState} from 'react';
import axios from "axios";
import PostTile from "../../components/postTile/PostTile";
import RedditHeader from "../../components/redditHeader/RedditHeader";
import './Home.css';
import redditLogo from "../../assets/redditlogo.png";
import NoviFooter from "../../components/noviFooter/NoviFooter";

function Home({error, toggleError, loading, toggleLoading}) {
    const [redditPosts, setRedditPosts] = useState({});

    useEffect(() => {
        async function fetchData() {
            toggleError(false);
            toggleLoading(true);

            try {
                const {data} = await axios.get('https://www.reddit.com/hot.json?limit=15');
                setRedditPosts(data.data.children);
                toggleLoading(false);
            } catch (e) {
                console.error(e);
                toggleError(true);
                toggleLoading(false);
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

                    {loading && <p className="loading">Loading the hottest posts...</p>}

                    <div className="post-container">
                        {redditPosts.length > 0 && redditPosts.map((post) => {

                            return (
                                <PostTile
                                    data={post.data}
                                    key={post.id}
                                />
                            )
                        })}

                        {error && <p className="error-message">Sorry, er gaat iets mis!</p>}
                    </div>
                </div>
            </main>

            <NoviFooter/>
        </>
    );
}

export default Home;