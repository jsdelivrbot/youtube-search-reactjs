import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    //const video = props.video; ES6 syntax -> use {video} instead
    // const onVideoSelect = props.onVideoSelect;
    //console.log(video)

    const imageUrl = video.snippet.thumbnails.default.url; // youtube api

    return (
        <li onClick={() => onVideoSelect(video)} className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src={imageUrl}/>
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        {video.snippet.title}
                    </div>
                </div>
            </div>
        
        </li>
    );
};

export default VideoListItem;