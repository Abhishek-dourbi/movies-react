import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import './player.css';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false
        }
    }

    onPlayPauseClick = (action) => {
        if(action === 'play') {
            document.querySelector('.react-player__preview').click();
        }
        this.setState({
            playing: action === 'play'
        })
    };

    onPause = () => {
        this.setState({
            playing: false
        })
    };

    onPlay = () => {
        this.setState({
            playing: true
        })
    };

    onEnded = () => {
        this.setState({
            playing: false
        })
    };

    render() {
        const {playing} = this.state;
        return (
            <div className='player-wrapper'>
                <ReactPlayer
                    ref={(r) => (this.player = r)}
                    className='react-player'
                    url='https://ia800208.us.archive.org/4/items/Popeye_forPresident/Popeye_forPresident_512kb.mp4'
                    playing={playing}
                    controls
                    light={'https://d1dfc9w6nzu9oi.cloudfront.net/5ec6f8f12d91113d70d55fd6'}
                    width={'100%'}
                    height={'100%'}
                    onPause={this.onPause}
                    onPlay={this.onPlay}
                    onEnded={this.onEnded}
                />
                <div onClick={() => this.onPlayPauseClick(playing ? 'pause' : 'play')} className='play-pause-button-container'>
                    {   playing ?
                        <i className="fas fa-pause player-button" /> :
                        <i className="fas fa-play player-button"/>
                    }
                </div>
                {
                    playing ?
                    <div className='backward-button-container'>
                        <i className="fas fa-undo player-button" />
                    </div> : null
                }
                {   playing ?
                    <div className='forward-button-container'>
                        <i className="fas fa-redo player-button"/>
                    </div> : null
                }
                <div className="overlay" />
                <div className='rating-overlay-container'>
                    <div className='rating-label'>
                        Rated
                    </div>
                    <div className='rating'>
                        18+
                    </div>
                </div>
                <div className='views-container'>
                    <div className='views'>
                        <i className="fas fa-eye" />
                        <span className='views-label'>0</span>
                    </div>
                </div>
            </div>
        );
    }
}

export default Player;
