import React, { useState } from "react";
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import "./VideoCard.css";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};


function VideoCard({
     thumbnailUrl,
     channelImageUrl,
     IsCustom,
     postedDate,
     title,
     channelName,
     noOfViews}) {

  const [open, setOpen] = React.useState(false);
  const [Input,setInput ] = useState("");
  const [titleInput, setTitleInput ]= useState("");
  const [Thumbtitle, setThumbTitle] = useState("");
  const [ImageUrl, setImageUrl]= useState("");

  const handleClose = (e) => {
    e.preventDefault();
    setImageUrl(Input);
    setThumbTitle(titleInput);
    setOpen(false);
  };
  return (<div className="videoCard">
   <Modal open={open} onClose={handleClose}>
      <Box sx={{ ...style, width: 400 }}>
        <form>
      <TextField 
      value={Input} 
      placeholder="Image Url"
      onChange={e => setInput(e.target.value)}/>

      <TextField 
      value={titleInput} 
      placeholder="Title"
      onChange={e => setTitleInput(e.target.value)}/>

      <button type="submit" onClick={handleClose} >Set Image URL</button>
        </form>
      </Box>


          
  </Modal>
    
   {IsCustom && !ImageUrl ?(<button onClick={(e) => setOpen(true)}>Select Thumbnail</button>) :(
   <img  className="VideoCard__thumbnail" src={ImageUrl || thumbnailUrl} alt="" /> ) }
   <Button />
    <div className="videoCard__info">
      <div className="videoCard__channelImageContainer">
      <img  src={channelImageUrl} alt=""/>
      </div>
    {/* </div> */}
      <div className="videoCard__infoText">
        <p className="videoCard__title">{ Thumbtitle || title}</p>
        <p className="videoCard__channelName">{channelName}</p>
        <p className="videoCard__noOfViewsAndpostedDate">
          {noOfViews}•{postedDate} </p>
      </div>
    </div>


  </div>);
}

export default VideoCard



