// page.tsx
'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Video from '../components/Video';

export default function Home() {
    const [searchQuery, setSearchQuery] = useState('');

    const videos = [
        { id: 'video1', title: 'Video 1', thumbnail: 'https://example.com/thumbnail1.jpg' },
        { id: 'video2', title: 'Video 2', thumbnail: 'https://example.com/thumbnail2.jpg' },
        { id: 'video3', title: 'Video 3', thumbnail: 'https://example.com/thumbnail3.jpg' },
    ];

    const filteredVideos = videos.filter(video =>
        video.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div>
            <Header />
            <Navbar />
            <div className="container">
                <input
                    type="text"
                    placeholder="Cari video..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button>Cari</button>
                <div className="content-box active">
                    <h2>Video Unggulan:</h2>
                    {filteredVideos.map((video) => (
                        <Video key={video.id} title={video.title} thumbnail={video.thumbnail} videoId={video.id} />
                    ))}
                </div>
            </div>
        </div>
    );
}
