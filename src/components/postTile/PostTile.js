import React from 'react';
import './PostTile.css';
import clipText from "../../helpers/clipText";

function PostTile({data}) {

    return (
        <article className="post-tile">
            <h3>{clipText(data.title, 100)}</h3>
            <div className="article-footer">
                <p>{data.subreddit_name_prefixed}</p>
                <p>Comments {data.num_comments} — Ups {data.ups} </p>
            </div>
        </article>
    );
}

export default PostTile;