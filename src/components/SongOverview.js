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
      <table className="songlist">
        <thead>
          <tr className="songlist__header">
            <th className="songlist__title">Song</th>
            <th className="songlist__title">Artist</th>
            <th className="songlist__title">Genre</th>
            <th className="songlist__title">Rating</th>
          </tr>
        </thead>

        <SongList songs={songs} />
      </table>
    </div>
  );
};

export default SongOverview;
