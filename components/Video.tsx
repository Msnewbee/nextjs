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

// package.json
{
  "name": "iclik-bos-nextjs",
  "version": "1.0.0",
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "next": "^14.0.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@types/react": "^18.2.0",
    "@types/node": "^20.0.0",
    "typescript": "^5.0.0"
  }
}
