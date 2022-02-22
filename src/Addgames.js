import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory } from "react-router-dom";
import { API } from './global';

export function Addgames() {

const [uni,setUni]=useState("")

const [name,setName]=useState("")

const [poster,setPoster]=useState("")

const [release,setRelease]=useState("")

const [publisher,setPublisher]=useState("")

const [genres,setGenres]=useState("")

const history=useHistory();

const New ={
          
  id:uni,
  name:name,
  poster:poster,
  release:release,
  publisher:publisher,
  genres:genres
};

console.log(New);

const addGames = (New) => {

  console.log("onSubmit", New);

  fetch(`${API}/Games/`, {

    method: "POST",

    body: JSON.stringify(New),

    headers: {

      "content-type": "application/json",

    },

  }).then(() => history.push("/Games"));
};


  return (
    <div>
      <div className="input">
      <TextField 
      id="filled-basic" 
      label="Id" 
      variant="filled" 
      onChange={(event)=>setUni(event.target.value)}/>

      <TextField 
      id="filled-basic" 
      label="Game name" 
      variant="filled" 
      onChange={(event)=>setName(event.target.value)}
      />

      <TextField 
      id="filled-basic" 
      label="Poster"     
      variant="filled" 
      onChange={(event)=>setPoster(event.target.value)}
      />

      <TextField 
      id="filled-basic" 
      label="Release" 
      variant="filled" 
      onChange={(event)=>setRelease(event.target.value)}
      />

      <TextField 
      id="filled-basic" 
      label="Publisher" 
      variant="filled" 
      onChange={(event)=>setPublisher(event.target.value)}
      />

      <TextField 
      id="filled-basic" 
      label="Genres" 
      variant="filled" 
      onChange={(event)=>setGenres(event.target.value)}
      />

      <Button 
      color="error"

      onClick={()=>addGames(New)}>Addgame</Button>
      </div>
    </div>
  );
}
