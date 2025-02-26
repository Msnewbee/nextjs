// components/Video.tsx
import { useState } from 'react';

export default function Video({ title, thumbnail, videoId }) {
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);

    return (
        <div className="content-box">
            <h3>{title}</h3>
            <a href={`https://example.com/video?surl=${videoId}`} target="_blank" rel="noopener noreferrer">
                <img src={thumbnail} alt={`Thumbnail ${title}`} />
            </a>
            <div>
                <button className="like-btn" onClick={() => setLikeCount(likeCount + 1)}>👍 {likeCount}</button>
                <button className="dislike-btn" onClick={() => setDislikeCount(dislikeCount + 1)}>👎 {dislikeCount}</button>
            </div>
        </div>
    );
}
