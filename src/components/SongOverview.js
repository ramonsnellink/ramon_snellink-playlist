import React, { useState } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";
import { v4 as uuidv4 } from "uuid";

const SongOverview = () => {
  const [songs, setSongs] = useState([]);

  const addSong = (e, song) => {
    e.preventDefault();
    const songId = uuidv4();
    song = { ...song, id: songId }; // add ID to song object
    setSongs([...songs, song]); // add the song the the songs array in state
  };

  const removeSong = (id) => {
    const arrayWithoutSong = songs.filter((song) => {
      return song.id !== id;
    });

    setSongs(arrayWithoutSong);
  };

  return (
    <div>
      <h1 className="songoverview__title">Winc Lil' Liedjeslijst</h1>
      <SongForm addSong={addSong} />
      <table className="songlist">
        <thead>
          <tr className="songlist__header">
            <th className="songlist__title">Song</th>
            <th className="songlist__title">Artist</th>
            <th className="songlist__title">Genre</th>
            <th className="songlist__title">Rating</th>
            <th className="songlist__title">Delete</th>
          </tr>
        </thead>

        <SongList songs={songs} removeSong={removeSong} />
        {console.log("Songs state:", songs)}
      </table>
    </div>
  );
};

export default SongOverview;
