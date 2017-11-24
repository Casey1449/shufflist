import React, { Component } from 'react';
import fire from './firebase';
import './App.css';

class App extends Component {
	constructor(props) {
    super(props);
    this.state = { 
			currentlyPlayingSong: '', 
			nextUpSong: '',
			songs: ''
		}; 
	}
	
  async componentWillMount(){
    let songs = await fire.database().ref("songs").orderByKey();
		songs.once('value').then(snapshot => console.log(snapshot.value()));
	}
	
	getRandomSong(){

	}

  // addMessage(e){
  //   e.preventDefault(); // <- prevent form submit from reloading the page
	// 	/* Send the message to Firebase */
	// 	messagesRef.on('child_added', snapshot => {
  //     /* Update React state when message is added at Firebase Database */
  //     let message = { text: snapshot.val(), id: snapshot.key };
  //     this.setState({ nextUpSong: [message].concat(this.state.messages) });
  //   })
  //   fire.database().ref('messages').push( this.inputEl.value );
  //   this.inputEl.value = ''; // <- clear the input
  // }
  render() {
    return (
      <div className="App">
        <h1>Logan's Shufflist App!</h1>
				<h2>testing new deploy scripts</h2>
      </div>
    );
  }
}

export default App;
