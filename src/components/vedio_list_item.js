import React, { Component } from 'react'
// {video} is exactly same as video = props.video
const VedioListItem = ({video}) =>{
    const imageaUrl = video.snippet.thumbnails.default.url;

    return (
        <li className = "list-group-item">
            <div className = "video-list media">
                <div className = "media-left">
                    <img className = "media-object" src = {imageaUrl}/>
                </div>

                <div className = "media-body">
                    <div className = "media-heading">{video.snippet.title}
                    </div>
                </div>
            </div>
        </li>
    );
}

export default VedioListItem;