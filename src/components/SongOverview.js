import React, { useState } from "react";
import SongForm from "./SongForm";
import SongList from "./SongList";

const SongOverview = () => {
  const [songs, setSongs] = useState();

  const addSong = (e, song) => {
    e.preventDefault();
    // doe iets om de state aan te passen
    console.log("values", song);
    setSongs({ ...songs, song }); // hier moet ik het in een array stoppen.
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
      </table>
      {/* <SongList songs={this.state.songs} /> */}

      {console.log("Song list", songs)}
    </div>
  );
};

export default SongOverview;
