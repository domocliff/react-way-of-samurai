import React from 'react';
import s from './VideoPage.module.css';

const VideoPage = () => {

    return (
    
        <div className={s.VideoPage}>
            VideoPage
            <iframe width="560" height="315" src="https://www.youtube.com/embed/4qQyi3SlqUM" 
            frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
            allowfullscreen></iframe>
        </div>
    )
}

export default VideoPage;