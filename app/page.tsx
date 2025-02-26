'use client';
import { useState } from 'react';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Video from '../components/Video';

export default function Home() {
    const [activeTab, setActiveTab] = useState('loby');
    const [searchQuery, setSearchQuery] = useState('');

    const videos = [
        {
            id: 'video1',
            title: 'Masturbasi dengan Jari',
            thumbnail: 'https://example.com/thumbnail1.jpg',
        },
        {
            id: 'video2',
            title: 'My sister was caught masturbating in the bathroom',
            thumbnail: 'https://example.com/thumbnail2.jpg',
        },
        {
            id: 'video3',
            title: 'Langkah Kaka Membantu Adiknya Cum',
            thumbnail: 'https://example.com/thumbnail3.jpg',
        },
    ];

    const searchVideos = () => {
        const filteredVideos = videos.filter(video =>
            video.title.toLowerCase().includes(searchQuery.toLowerCase())
        );
        console.log(filteredVideos); // Tampilkan hasil pencarian di console
    };

    return (
        <div>
            <Header />
            <Navbar />
            <div className="container">
                <input
                    type="text"
                    id="searchInput"
                    placeholder="Cari video..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button onClick={searchVideos}>Cari</button>

                <div className={`content-box ${activeTab === 'loby' ? 'active' : ''}`} id="loby">
                    <h2>Selamat Datang di Loby</h2>
                    <p>Silakan pilih menu navigasi untuk melanjutkan.</p>
                </div>

                <div className={`content-box ${activeTab === 'vidio' ? 'active' : ''}`} id="vidio">
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
