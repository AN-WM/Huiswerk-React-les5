import React, {useEffect, useState} from 'react';
import axios from "axios";
import "./Subreddit.css";
import {useParams} from "react-router-dom";
import RedditHeader from "../../components/redditHeader/RedditHeader";
import NoviFooter from "../../components/noviFooter/NoviFooter";
import numberNotation from "../../helpers/numberNotation";

function Subreddit({error, toggleError, loading, toggleLoading}) {
    const [subreddit, setSubreddit] = useState({});
    const {subredditId} = useParams();

    useEffect(() => {
        async function fetchData() {
            toggleError(false);
            toggleLoading(true);

            try {
                const {data} = await axios.get(`https://www.reddit.com/r/${subredditId}/about.json`);
                setSubreddit(data.data);
                toggleLoading(false);
            } catch (e) {
                console.error(e);
                toggleError(true);
                toggleLoading(false);
            }

        }

        fetchData();

        // eslint-disable-next-line
    }, [subredditId]);

    return (
        <div className="page-container">
            <RedditHeader>
                <h1>{subreddit.display_name_prefixed}</h1>
                <p className="subtitle">Subreddit specifications</p>
            </RedditHeader>

            <main>
                <div className="standard-container" id="subreddit-container">

                    {loading && <p className="loading">Loading subreddit info...</p>}
                    {error && <p className="error-message">Sorry, er gaat iets mis!</p>}

                    <h4>Title</h4>
                    <p>{subreddit.title}</p>
                    <h4>Description</h4>
                    <p>{subreddit.public_description}</p>
                    <h4>Number of subscribers</h4>
                    {subreddit.subscribers &&
                        <p>{numberNotation(subreddit.subscribers)}</p>
                    }

                    <a
                        href="/"
                        className="red-link"
                        id="home-link"
                    >
                        &lt; Take me back
                    </a>
                </div>
            </main>

            <NoviFooter/>
        </div>
    );
}

export default Subreddit;