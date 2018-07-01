import React, { Component } from 'react'
import ReactDom from 'react-dom';
import VedioListItem from './vedio_list_item';

const VedioList = (props) => {

    const videoItems = props.videos.map((video)=>{
        return <VedioListItem 
        onVideoSelect = {props.onVideoSelect}
        key={video.etag} 
        video = {video} />
    })
    return (
        <ul className="col-md-4 list-group">
        {videoItems}
        </ul>
    );
}

export default VedioList;