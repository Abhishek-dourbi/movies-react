import React, {Component} from 'react';
import Player from "../../component/player/player";
import './playlist.css';
import Card from "../../component/card/card";

const PlaylistData = [
    {
        thumbnail: 'https://d1dfc9w6nzu9oi.cloudfront.net/5ec6f8f12d91113d70d55fd6',
        id: '1',
        title: 'Ishq Kills',
        tags: [
            'Drama',
            'Erotic',
            'Suspense'
        ],
        cards: [
            {
                episodeNo: 1,
                partNo: 1,
                duration: 23,
                thumbnail: 'https://d1dfc9w6nzu9oi.cloudfront.net/5ec6c3cb8d93ec3d56f20c78'
            },
            {
                episodeNo: 2,
                partNo: 2,
                duration: 21,
                thumbnail: 'https://d1dfc9w6nzu9oi.cloudfront.net/5ec6c4492d91113d70d5135c'
            },
            {
                episodeNo: 3,
                partNo: 3,
                duration: 22,
                thumbnail: 'https://d1dfc9w6nzu9oi.cloudfront.net/5ec6c4a81e6eae3d68167440'
            },
            {
                episodeNo: 4,
                partNo: 4,
                duration: 20,
                thumbnail: 'https://d1dfc9w6nzu9oi.cloudfront.net/5ec6c50b393c5d3d6c3e41c1'
            }
        ]
    },
    {
        thumbnail: 'https://d1dfc9w6nzu9oi.cloudfront.net/5e4ef5fbe903a73d34a4c365',
        id: '2',
        title: 'The Bull of Dalal Street',
        tags: [
            'Drama',
            'Erotic',
            'Suspense'
        ],
        cards: [
            {
                episodeNo: 1,
                partNo: 1,
                duration: 23,
                thumbnail: 'https://d1dfc9w6nzu9oi.cloudfront.net/5ec6c3cb8d93ec3d56f20c78'
            },
            {
                episodeNo: 2,
                partNo: 2,
                duration: 21,
                thumbnail: 'https://d1dfc9w6nzu9oi.cloudfront.net/5ec6c4492d91113d70d5135c'
            },
            {
                episodeNo: 3,
                partNo: 3,
                duration: 22,
                thumbnail: 'https://d1dfc9w6nzu9oi.cloudfront.net/5ec6c4a81e6eae3d68167440'
            },
            {
                episodeNo: 4,
                partNo: 4,
                duration: 20,
                thumbnail: 'https://d1dfc9w6nzu9oi.cloudfront.net/5ec6c50b393c5d3d6c3e41c1'
            }
        ]
    },
    {
        thumbnail: 'https://d1dfc9w6nzu9oi.cloudfront.net/5ea1ed105e47c13d5388b605',
        id: '3',
        title: 'Smartphone',
        tags: [
            'Drama',
            'Erotic',
            'Suspense'
        ],
        cards: [
            {
                episodeNo: 1,
                partNo: 1,
                duration: 23,
                thumbnail: 'https://d1dfc9w6nzu9oi.cloudfront.net/5ec6c3cb8d93ec3d56f20c78'
            },
            {
                episodeNo: 2,
                partNo: 2,
                duration: 21,
                thumbnail: 'https://d1dfc9w6nzu9oi.cloudfront.net/5ec6c4492d91113d70d5135c'
            },
            {
                episodeNo: 3,
                partNo: 3,
                duration: 22,
                thumbnail: 'https://d1dfc9w6nzu9oi.cloudfront.net/5ec6c4a81e6eae3d68167440'
            },
            {
                episodeNo: 4,
                partNo: 4,
                duration: 20,
                thumbnail: 'https://d1dfc9w6nzu9oi.cloudfront.net/5ec6c50b393c5d3d6c3e41c1'
            }
        ]
    }
];

class Playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            thumbnail: '',
            cards: [],
            video: '',
            id: '',
            tags: []
        };
    }

    componentDidMount() {
        const id = this.props.match.params.id;
        const data = PlaylistData.filter(ele => ele.id === id);
        this.setState({
            thumbnail: data[0].thumbnail,
            id: data[0].id,
            cards: data[0].cards,
            title: data[0].title,
            tags: data[0].tags
        })
    }

    render() {
        const {thumbnail, cards, title, tags} = this.state;
        return (
            <div className='playlist-container'>
                <div className='row'>
                    <div className='col-md-8 col-sm-12'>
                    <div className='player-container'>
                        <Player thumbnail={thumbnail} title={title} tags={tags}/>
                    </div>
                    </div>
                    <div className='col-md-4 col-sm-12'>
                    <div className='playlist-card-container'>
                        {
                            cards.length && cards.map(card => {
                                const {episodeNo, partNo, duration, thumbnail} = card;
                                return <Card episode={episodeNo} part={partNo} duration={duration} thumbnail={thumbnail} />
                            })
                        }
                    </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default Playlist;
