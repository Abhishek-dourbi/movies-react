import React, {Component} from 'react';
import ReactPlayer from 'react-player';
import './player.css';
import video from '../../videos/test.mp4';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playing: false,
            hasStarted: false,
            buttonVisibility: true,
            played: 0,
            seeking: false
        }
    }

    onPlayPauseClick = (action) => {
        if(action === 'play' && !this.state.hasStarted) {
            document.querySelector('.react-player__preview').click();
            this.setState({
                hasStarted: true
            })
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

    onBackward = () => {
        const currentTime = this.player.getCurrentTime();
        this.player.seekTo(currentTime - 10, 'seconds');
    };

    onForward = () => {
        const currentTime = this.player.getCurrentTime();
        this.player.seekTo(currentTime + 10, 'seconds');
    };

    mouseHover = (action) => {
        this.setState({
            buttonVisibility: action === 'enter'
        })
    };

    handleSeekMouseDown = e => {
        this.setState({ seeking: true })
    };

    handleSeekChange = e => {
        this.setState({ played: parseFloat(e.target.value) })
    };

    handleSeekMouseUp = e => {
        this.setState({ seeking: false });
        this.player.seekTo(parseFloat(e.target.value))
    };

    render() {
        const {playing, hasStarted, buttonVisibility} = this.state;
        const { thumbnail, title, tags } = this.props;
        return (
            <>
                <div className='player-wrapper'>
                    <ReactPlayer
                        ref={(r) => (this.player = r)}
                        className='react-player'
                        url={video}
                        playing={playing}
                        controls={true}
                        light={thumbnail}
                        width={'100%'}
                        height={'100%'}
                        onPause={this.onPause}
                        onPlay={this.onPlay}
                        onEnded={this.onEnded}
                        onMouseEnter={() => this.mouseHover('enter')}
                        onMouseLeave={() => this.mouseHover('leave')}
                        onProgress={(num) => this.setState({played: num.played})}
                    />
                    <div onMouseEnter={() => this.mouseHover('enter')} onClick={() => this.onPlayPauseClick(playing ? 'pause' : 'play')} className='play-pause-button-container'>
                        {   playing ?
                            (buttonVisibility ? <i className="fas fa-pause player-button" /> : null) :
                            <i className="fas fa-play player-button"/>
                        }
                    </div>
                    {
                        hasStarted && (buttonVisibility || !playing) ?
                        <div onMouseEnter={() => this.mouseHover('enter')} onClick={this.onBackward} className='backward-button-container'>
                            <i className="fas fa-undo player-button" />
                        </div> : null
                    }
                    {   hasStarted && (buttonVisibility || !playing) ?
                        <div onMouseEnter={() => this.mouseHover('enter')} onClick={this.onForward} className='forward-button-container'>
                            <i className="fas fa-redo player-button"/>
                        </div> : null
                    }
                    <div className="overlay" />
                    {
                        !hasStarted ?
                        <>
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
                                    <i className="fas fa-eye"/>
                                    <span className='views-label'>0</span>
                                </div>
                            </div>
                        </> : null
                    }
                    {/*{*/}
                    {/*    hasStarted && (buttonVisibility || !playing) ?*/}
                    {/*    <input*/}
                    {/*        type='range' min={0} max={0.999999} step='any'*/}
                    {/*        value={this.state.played}*/}
                    {/*        className='seek'*/}
                    {/*        onMouseDown={this.handleSeekMouseDown}*/}
                    {/*        onChange={this.handleSeekChange}*/}
                    {/*        onMouseUp={this.handleSeekMouseUp}*/}
                    {/*    /> : null*/}
                    {/*}*/}
                </div>
                <div className='title-intro p-4'>
                    <h1>
                        {title}
                    </h1>
                    <div className='p-4 tags-container'>
                        {
                            tags.map(tag => {
                                return (
                                    <div className='tags'>
                                        {tag}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </>
        );
    }
}

export default Player;
