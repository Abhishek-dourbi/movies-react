import React, {Component} from 'react';
import Player from "../../component/player/player";
import './playlist.css';
import Card from "../../component/card/card";

class Playlist extends Component {
    render() {
        return (
            <div className='playlist-container'>
              <div className='player-container'>
                  <Player/>
              </div>
              <div className='playlist-card-container'>
                <Card />
              </div>
            </div>
        );
    }
}

export default Playlist;
