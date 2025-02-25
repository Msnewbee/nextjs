import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Video from '../components/Video';

export default function Home() {
    const videos = [
        {
            id: 'video1',
            title: 'Masturbasi dengan Jari',
            thumbnail: 'https://dm-data.terabox.com/thumbnail/ce3432897c2979ebe3b1c983865c21a5?fid=81366251617206-250528-40095180408914&time=1740513600&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-%2BgzBQusvDj%2BK%2F%2B9x0Em7wYB9KII%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=149796175507626486&dp-callid=0&size=c850_u580&quality=100&vuk=81366251617206&ft=video',
        },
        {
            id: 'video2',
            title: 'My sister was caught masturbating in the bathroom',
            thumbnail: 'https://dm-data.terabox.com/thumbnail/c5ec94a6472bdf55629c6c2aa8aa559a?fid=81366251617206-250528-1017568112374262&time=1740452400&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-8PdGnOyL%2BllqfUK9%2Fx5e5jRjlQY%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=2572793354791783378&dp-callid=0&size=c850_u580&quality=100&vuk=81366251617206&ft=video',
        },
        {
            id: 'video3',
            title: 'Langkah Kaka Membantu Adiknya Cum',
            thumbnail: 'https://dm-data.terabox.com/thumbnail/363529971cf185c95da8170a965cd708?fid=81366251617206-250528-843976327435458&time=1740513600&rt=pr&sign=FDTAER-DCb740ccc5511e5e8fedcff06b081203-NjGmt%2BqrN6e4rbYAY7uaDlXwWS8%3D&expires=10y&chkv=0&chkbd=0&chkpc=&dp-logid=149796175507626486&dp-callid=0&size=c850_u580&quality=100&vuk=81366251617206&ft=video',
        },
    ];

    return (
        <div>
            <Header />
            <Navbar />
            <div className="container">
                <input type="text" id="searchInput" placeholder="Cari video..." />
                <button onClick={searchVideos}>Cari</button>
                <div className="content-box active" id="loby">
                    <h2>Selamat Datang di Loby</h2>
                    <p>Silakan pilih menu navigasi untuk melanjutkan.</p>
                </div>
                <div className="content-box" id="vidio">
                    <h2>Vidio</h2>
                    <p>Video Unggulan:</p>
                    {videos.map((video) => (
                        <Video key={video.id} title={video.title} thumbnail={video.thumbnail} videoId={video.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}
