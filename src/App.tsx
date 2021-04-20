import React from 'react';
import './App.css';
import SearchBar from "./components/searchBar/searchBar";
import ytLogo from './misc/img/Youtube(amin).png';
import MusicTable from "./components/musicTable/musicTable";


function App() {
  return (
    <div className="App">
        <div className="App-div-title">
            <img src={ytLogo} className="App-yt-logo"/>
            <h1 className="App-title-h1">Youtube Playlist Party</h1>
        </div>
        <SearchBar/>
        <MusicTable/>
    </div>
  );
}

export default App;
