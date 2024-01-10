import {useEffect, useState} from 'react';
import Player from './components/Player';
function App() {
  const [songs] = useState([
    {
      title: "1400/999",
      artist: "juice and red",
      img_src: "./images/1400999.png",
      src: "./music/1400 999.mp4",
    },
    {
      title: "After party",
      artist: "Don Toliver",
      img_src: "./images/after party.jpeg",
      src: "./music/After-Party.mp3",
    },
    {
      title: "conversations",
      artist: "Juice wrld",
      img_src: "./images/conversation.png",
      src: "./music/Conversation.mp4",
    },
    {
      title: "Ransom",
      artist: "Lil tecca",
      img_src: "./images/ransom.jpeg",
      src: "./music/Ransom.mp4",
    },
  ]);

  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [nextSongIndex, setNextSongIndex] = useState(currentSongIndex + 1);

  useEffect(()=>{
    setNextSongIndex(() =>{
      let length = songs.length;
      if (currentSongIndex + 1 > length - 1){
        return 0;
      } else{
        return currentSongIndex + 1;
      }
    })
  },[currentSongIndex]);


  return (
    <div className="App">
      <Player 
        currentSongIndex={currentSongIndex}
        setCurrentSongIndex={setCurrentSongIndex}
        nextSongIndex={nextSongIndex}
        songs={songs}
      />
    </div>
  );
}

export default App;
