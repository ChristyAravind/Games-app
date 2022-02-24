import React from "react";
import { useHistory } from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { API } from './global';
import { Games } from './Games';
import { useState } from "react";
import { useEffect } from "react";

export function Map() {


    const history=useHistory();

    const [list,setList]=useState([])

    const getGames = () => {

      fetch(`${API}/Games`,{
          
//CRUD: method:"GET"
          
        method : "GET",
          
      })//promise

      .then((data)=> data.json())//Response Object

      .then((gms)=> setList(gms));
     }
     useEffect(() => getGames(),[])

  const Deletegame = (id)=>{

    fetch(`${API}/Games/${id}`, {
      method: "DELETE",
    }).then(() => getGames());

  }

  
  return (
    <div className="map">
      {list.map((son)=>(

            <Games

            id={son.id}

            name={son.name}

            poster={son.poster}

            release={son.release}

            publisher={son.publisher}

            genres={son.genres}

            Editicon={<IconButton
                aria-label="delete"
               fontSize="large"

                onClick={()=>history.push(`/Editgames/${son.id}`)}
              >
                <EditIcon />
                </IconButton>
            }
            
            Deleticon={<IconButton
                aria-label="delete"
                fontSize="large"

               onClick={()=>Deletegame(son.id)}
              >
                <DeleteIcon />
                </IconButton>
            }
            />
      ))}
    </div>
  );
}




