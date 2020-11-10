import Song from "./Song";

const SongList = (props) => {
  const songListItems = props.songs.map((song) => {
    return <Song songData={song} key={song.id} />;
  });

  return <tbody>{songListItems}</tbody>;
};

export default SongList;
