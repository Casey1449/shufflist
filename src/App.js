import React, { Component } from "react";
import fire from "./firebase";
import "./App.css";

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			songsLoading: true,
			currentSong: {
				song: "",
				artist: ""
			},
			nextUp: {
				song: "",
				artist: ""
			},
			songs: []
		};
	}

	componentWillMount() {
		const songs = fire
			.database()
			.ref("songs")
			.orderByKey();
		songs
			.once("value")
			.then(snapshot => this.setState({ songs: snapshot.val() }))
			.then(this.getRandomSong)
			.then(() => this.setState({ songsLoading: false }));
	}

	getRandomSong = () => {
		const songCount = this.state.songs.length - 1 || 0;
		const randomSong = Math.floor(Math.random() * songCount);
		this.setState({ nextUp: this.state.songs[randomSong] });
	};

	playSong = () => {
		this.setState({ currentSong: this.state.nextUp });
		this.getRandomSong();
	};

	render() {
		const { nextUp, currentSong, songsLoading } = this.state;

		return (
			<div className="App">
				{songsLoading && <p>{"Loading Logan's Repertoire..."}</p>}
				{currentSong.song && <p>{`Now playing: ${currentSong.song}`}</p>}
				{!songsLoading && (
					<div>
						<p>Next up:</p>
						<h1>{nextUp.song}</h1>
						<h2>{nextUp.artist}</h2>
					</div>
				)}
				<button onClick={this.getRandomSong}>"No."</button>
				<button onClick={this.playSong}>"Yes!"</button>
			</div>
		);
	}
}

export default App;
