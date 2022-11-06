import React, {Component} from 'react';

import Navbar from './Navbar'
import VideoList from './Main'
import Footer from './Footer';

export default function Watch() {
	return (
		<>
			<Navbar />
			<VideoPage />
            <Footer />
		</>
	);
}

function VideoPlayer(){
	return (
        <video controls className='video-player'>
            <source src="/videos/video.mp4" type="video/mp4"/>
        </video>
	)
}


function VideoPage(){
    return (
        <section className='video-page'>
            <section className='video-container'>
                <VideoPlayer />
            </section>
            <div>
                <VideoList name="Selected for you" number={8} width="min" column="column" />
            </div>
        </section>
    )
}
