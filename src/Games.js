import React, { useState } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import ThumbUpAltTwoToneIcon from '@mui/icons-material/ThumbUpAltTwoTone';
import Badge from '@mui/material/Badge';
import ThumbDownAltTwoToneIcon from '@mui/icons-material/ThumbDownAltTwoTone';


export function Games({ name, poster, release, publisher, genres,id,Deleticon,Editicon }) {

 const[like,setLike]=useState(0);

 const[dislike,setDislike]=useState(0);


  return (
    <Card className='games'>

      <img src={poster} alt={name} />
    <CardContent>
    <div className="text">{name}</div>

    <h2>Release: {release}</h2>

    <h2>Publisher: {publisher}</h2>

    <h2>Genres: {genres}</h2>

    <div className="click">

    <IconButton aria-label="delete" onClick={() => setLike(like + 1)}> <Badge badgeContent={like} color="success">
    <ThumbUpAltTwoToneIcon fontSize="large"
/>
  </Badge></IconButton>

    <IconButton aria-label="delete" onClick={() => setDislike(dislike + 1)}> <Badge badgeContent={dislike} color="error">
    <ThumbDownAltTwoToneIcon fontSize="large"
 />
  </Badge></IconButton>

    

    {Editicon}
    {Deleticon}
    </div>
    </CardContent>

    </Card>
  );
}
