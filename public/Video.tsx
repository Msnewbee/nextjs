export default function Video({ title, thumbnail, videoId }: { title: string; thumbnail: string; videoId: string }) {
    return (
        <div className="content-box">
            <h3>{title}</h3>
            <a href={`https://pay4fans.com/videoShare?surl=${videoId}`} target="_blank" rel="noopener noreferrer">
                <img src={thumbnail} alt={`Thumbnail ${title}`} />
            </a>
            <div>
                <button className="like-btn">👍 <span>0</span></button>
                <button className="dislike-btn">👎 <span>0</span></button>
            </div>
        </div>
    );
}
