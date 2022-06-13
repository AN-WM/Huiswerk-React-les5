import React from 'react';
import './PostTile.css';
import clipText from "../../helpers/clipText";
import numberNotation from "../../helpers/numberNotation";

function PostTile({data}) {

    return (
        <article className="post-tile">
            <h3><a
                    href={`https://www.reddit.com${data.permalink}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    id="tile-title"
            >
                {clipText(data.title, 100)}
            </a></h3>

            <div className="article-footer">
                <a
                    href={`/subreddit/${data.subreddit}`}
                    className="red-link"
                >
                    {data.subreddit_name_prefixed}
                </a>
                <p>Comments {numberNotation(data.num_comments)} — Ups {numberNotation(data.ups)} </p>
            </div>
        </article>
    );
}

export default PostTile;