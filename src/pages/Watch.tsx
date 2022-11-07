import React, {Component} from 'react';

import Navbar from './Navbar'
import VideoList, { randInt }  from './Main'
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
                <CommenSection />
            </section>
            <div>
                <VideoList name="Selected for you" number={8} width="min" column="column" />
            </div>
        </section>
    )
}

function CommenSection(){
    return (
        <section className="coment-section">
            <h3 style={{fontWeight: 500}}>Comments</h3>
            <Comments  number={randInt(0, 10)}/>
        </section>
    )
}


class Comment extends React.Component{
    
    private authorList = ["VideoShare", "JustOneMore", "ReacTor", "Hidden Facts"];
    private commentList = ["Veri gud","I realy like this", "Awsome!!!","I need another one pls","This sucks!"];
    
    private author: string;
    private comment: string;
    
    public constructor(props: any) {
        super(props);
        this.author = this.authorList[randInt(0, this.authorList.length)];
        this.comment = this.commentList[randInt(0, this.commentList.length)];
    }
    
    render(){
        return (
            <div className="comment">
                <div className="commenter-pic"></div>
                <div>
                    <h4>{this.author}</h4>
                    <p>{this.comment}</p>
                </div>
            </div>
        )
    }
}

function Comments(props: any){
    let comments = []
    for(let i = 0; i < props.number; i++) {
        const comment = new Comment(props.comments)
        comments.push(comment.render());
    }
    return(
        <>
            {comments}
        </>
    )
}