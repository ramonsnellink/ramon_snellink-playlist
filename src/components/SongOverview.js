import React, { useState } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

const SongOverview = () => {
  const [songs, setSongs] = useState([]);

  const addSong = (e, song) => {
    e.preventDefault();
    const songId = songs.length + 1;
    song = { ...song, id: songId }; // voeg een ID toe
    setSongs([...songs, song]); // hier moet ik het in een array stoppen.
  };

  return (
    <div>
      <SongForm addSong={addSong} />
      <table>
        <thead>
          <tr className="song-header">
            <th className="song-row__item">Song</th>
            <th className="song-row__item">Artist</th>
            <th className="song-row__item">Genre</th>
            <th className="song-row__item">Rating</th>
          </tr>
        </thead>

        <SongList songs={songs} />
      </table>
    </div>
  );
};

export default SongOverview;
