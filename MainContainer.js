import React from "react";
import "./MainContainer.css";
import VideoCard from "./VideoCard";

function MainContainer() {
  return (
    <div className="mainContainer">
      <h2 className="mainContainer__title">Recommended</h2>
      <div className="mainContainer__vdos">
        <VideoCard
        channelImageUrl="https://yt3.googleusercontent.com/ytc/AOPolaT_VYSw1TzQExnDj6U5zyeeTGcaG13lYkZX7YosXw=s900-c-k-c0x00ffffff-no-rj"
        IsCustom
        postedDate="3 Days ago"
        noOfViews="5.2M Views"
        channelName="Mostly Sane" 
        title="Test vdos" 
        thumbnailUrl="https://marketplace.canva.com/EAEqfS4X0Xw/1/0/800w/canva-most-attractive-youtube-thumbnail-WwL5rLjjIuE.jpg"/>

        <VideoCard
         channelImageUrl="https://yt3.googleusercontent.com/ytc/AOPolaT_VYSw1TzQExnDj6U5zyeeTGcaG13lYkZX7YosXw=s900-c-k-c0x00ffffff-no-rj"
         postedDate="3 Days ago"
         noOfViews="5.2M Views"
         channelName="Mostly Sane" 
         title="Test vdos" 
         thumbnailUrl="https://marketplace.canva.com/EAEqfS4X0Xw/1/0/800w/canva-most-attractive-youtube-thumbnail-WwL5rLjjIuE.jpg"/> 

        <VideoCard
        channelImageUrl="https://yt3.googleusercontent.com/ytc/AOPolaT_VYSw1TzQExnDj6U5zyeeTGcaG13lYkZX7YosXw=s900-c-k-c0x00ffffff-no-rj"
        postedDate="3 Days ago"
        noOfViews="5.2M Views"
        channelName="Mostly Sane" 
        title="Test vdos" 
        thumbnailUrl="https://marketplace.canva.com/EAEqfS4X0Xw/1/0/800w/canva-most-attractive-youtube-thumbnail-WwL5rLjjIuE.jpg"/>

        <VideoCard
        channelImageUrl="https://yt3.googleusercontent.com/ytc/AOPolaT_VYSw1TzQExnDj6U5zyeeTGcaG13lYkZX7YosXw=s900-c-k-c0x00ffffff-no-rj"
        postedDate="3 Days ago"
        noOfViews="5.2M Views"
        channelName="Mostly Sane" 
        title="Test vdos" 
        thumbnailUrl="https://marketplace.canva.com/EAEqfS4X0Xw/1/0/800w/canva-most-attractive-youtube-thumbnail-WwL5rLjjIuE.jpg"/>

        <VideoCard
        channelImageUrl="https://yt3.googleusercontent.com/ytc/AOPolaT_VYSw1TzQExnDj6U5zyeeTGcaG13lYkZX7YosXw=s900-c-k-c0x00ffffff-no-rj"
        postedDate="3 Days ago"
        noOfViews="5.2M Views"
        channelName="Mostly Sane" 
        title="Test vdos" 
        thumbnailUrl="https://marketplace.canva.com/EAEqfS4X0Xw/1/0/800w/canva-most-attractive-youtube-thumbnail-WwL5rLjjIuE.jpg"/>
        
    </div>
    </div>
  )
}

export default MainContainer