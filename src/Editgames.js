import React, { useEffect, useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useHistory, useParams  } from "react-router-dom";
import { API } from './global';

export function Updategame() {

    const {id} = useParams()

    const [game,setGame] = useState(null);

  //UseEffect is used here:
    useEffect(()=>{

        fetch(
            `${API}/Games/${id}`,
        {
        
       //CRUD: method:"GET"  
            
        method:"GET",

        })
        .then((data)=>data.json())
        .then((gms)=>setGame(gms))

        .catch((err)=>console.log(err));
    },[id])

    console.log(game)
    return (

        <div>
            {game ? <Store game={game}/> : <h2>Please wait.........Loading</h2>}
        </div>
    );
}

function Store({game}){

    const [uni,setUni]=useState(game.id)

    const [name,setName]=useState(game.name)

    const [poster,setPoster]=useState(game.poster)

    const [release,setRelease]=useState(game.release)

    const [publisher,setPublisher]=useState(game.publisher)

    const [genres,setGenres]=useState(game.genres)

    const history=useHistory();

    const Editgame =()=>{

        const Updategame={
          
        id:uni,
        name:name,
        poster:poster,
        release:release,
        publisher:publisher,
        genres:genres
      };

      console.log(Updategame)
      fetch(
          `${API}/Games/${game.id}`,{

  //CRUD: method:"PUT"
              
            method:"PUT",
            body: JSON.stringify(Updategame),
          headers: {
             "content-type": "application/json"
          }
        }).then(()=>history.push("/Games"))

    }

    return(
      <div className="input">

      <TextField 
      id="filled-basic" 
      label="Id" 
      variant="filled" 
      value={uni}
      onChange={(event)=>setUni(event.target.value)}/>

      <TextField 
      id="filled-basic" 
      label="Game name" 
      variant="filled" 
      value={name}
      onChange={(event)=>setName(event.target.value)}
      />

      <TextField 
      id="filled-basic" 
      label="Poster"     
      variant="filled" 
      value={poster}
      onChange={(event)=>setPoster(event.target.value)}
      />

      <TextField 
      id="filled-basic" 
      label="Release" 
      variant="filled" 
      value={release}
      onChange={(event)=>setRelease(event.target.value)}
      />

      <TextField 
      id="filled-basic" 
      label="Publisher" 
      variant="filled" 
      value={publisher}
      onChange={(event)=>setPublisher(event.target.value)}
      />
      <TextField 
      id="filled-basic" 
      label="Genres" 
      variant="filled" 
      value={genres}
      onChange={(event)=>setGenres(event.target.value)}
      />
      <Button 
      color="error"
      onClick={()=> Editgame()}
      >Updategame</Button>

      </div>
    )



}
  

  

   
