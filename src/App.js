import { Switch, Route } from 'react-router-dom';
import { useState } from "react";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import * as React from "react";
import Toolbar from '@mui/material/Toolbar';
import './App.css';
import { Home } from './Home';
import { Map } from './Map';
import { Addgames } from './Addgames';
import { Updategame } from './Editgames';
import { useHistory } from 'react-router-dom';


export default function App() {

  const[mode,setMode]=useState("dark");

    const history=useHistory();

    const theme = createTheme({
      palette: {
        mode: mode,
      },
    });

  return (

    <ThemeProvider theme={theme}>

     <Paper style={{borderRadius: "0px" , minHeight: "100vh"}} elevation={4}>

    <div className="App">
    <AppBar position="static" color='secondary' >
    <Toolbar>
    
    <Button color="inherit" size='large' onClick={() => history.push("/")}>
    Home
    </Button>

    <Button color="inherit" size='large' onClick={() => history.push("/Games")}>
    Games
    </Button>

    <Button color="inherit" size='large' onClick={() => history.push("Addgames")}>
    Addgames
    </Button>

    <Button
                color="inherit"
                style={{ marginLeft: "auto" }}
                startIcon={
                  mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />
                }
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {mode === "light" ? "dark" : "light"} Mode
              </Button>

    </Toolbar>
    </AppBar>

    <Switch>

    <Route exact path="/">

      <Home/>

    </Route>

    <Route path="/Games">

      <Map />

    </Route>

    <Route path="/Addgames">

      <Addgames/>

    </Route>

    <Route path="/Editgames/:id">

    <Updategame />

</Route>

    </Switch>

    </div>
    </Paper>
    </ThemeProvider>
  );
}



