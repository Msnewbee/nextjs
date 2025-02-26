import { useState } from 'react';

export default function Video({ title, thumbnail, videoId }: { title: string; thumbnail: string; videoId: string }) {
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);

    return (
        <div className="content-box">
            <h3>{title}</h3>
            <a href={`https://pay4fans.com/videoShare?surl=${videoId}`} target="_blank" rel="noopener noreferrer">
                <img src={thumbnail} alt={`Thumbnail ${title}`} />
            </a>
            <div>
                <button className="like-btn" onClick={() => setLikeCount(likeCount + 1)}>
                    👍 <span>{likeCount}</span>
                </button>
                <button className="dislike-btn" onClick={() => setDislikeCount(dislikeCount + 1)}>
                    👎 <span>{dislikeCount}</span>
                </button>
            </div>
        </div>
    );
}
