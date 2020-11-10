import Song from "./Song";

const SongList = (props) => {
  const songListItems = props.songs.map((song) => {
    return <Song songData={song} key={song.id} removeSong={props.removeSong} id={song.id} />;
  });

  return <tbody>{songListItems}</tbody>;
};

export default SongList;
