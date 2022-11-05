import React from 'react';
import '../css/main.css';
import pc from  '../img/pc.jpg';
import iphone from '../img/iphone.jpg'
import statistics from '../img/statistics.jpg'
import hacker from '../img/hacker.jpg'

export default MainPage;

class Video {
    private title: string;
    private author: string;

    public constructor(title: string, author: string){
        this.title = title;
        this.author = author;
    };

    public presentation() : any {
        // Retuns the video presentation in HTML format
        let source: string;

        if (this.title === 'Why are iphones so expensive')
            source = iphone;
        else if (this.title === 'Top 10 gaming setups')
            source = pc;
        else if (this.title === 'Anonymus strikes again')
            source = hacker;
        else
            source = statistics;


        return (
            <a className="video-presentation" href="/watch/">
                <img src={source} className="video-image" alt='thumbnail'/>
                <div className="video-description">
                    <h1 className='video-title'>{this.title}</h1>
                    <p className='video-author'>{this.author}</p>
                </div>
            </a>
        )
    }
}

function randomInt(n: number, end: number): number {
    let rand = (Math.random()+n) * end;
    let decimal = rand;
    while (decimal>1){decimal /= 10};
    
    if (decimal > 0.5)
        return Math.ceil(rand);
    return Math.floor(rand);
}

class List{
    private name: string;
    public constructor(name: string){
        this.name = name;
    }

    public getName(): string {return this.name;};
    public setName(name: string) {this.name = name};
    public render(n: number): any {
        // @param n is the number of videos of the list

        let videos: any = [];
        const videoTitles = ["Why are iphones so expensive", "Top 10 gaming setups", "How statistics can fool you", "Anonymus strikes again"];
        const videoAuthors = ["VideoShare", "JustOneMore", "ReacTor", "Hidden Facts"];
        
        for (let i = 0; i < n; i++) {
            let video = new Video(videoTitles[randomInt(0, videoTitles.length)], videoAuthors[randomInt(0, videoAuthors.length)])
            videos.push(video.presentation());
        }

        return (
            <>
                <h1 className='list-title'>{this.name}</h1>
                <div className='video-list'>
                    {videos}
                </div>
            </>
        );
    }
}


function MainPage(){
    return (
        <main>
            <VideoList name="Trending" number="4" />
            <VideoList name="Selected for you" number="8" />
        </main>
    )
}


function VideoList(props: any) {
    const list = new List(props.name);
    return (
        list.render(props.number)
    );
}