const Song = ({ songData }) => {
  return (
    <tr className="songlist__row">
      <td className="songlist__item">{songData.title}</td>
      <td className="songlist__item">{songData.artist}</td>
      <td className="songlist__item">{songData.genre}</td>
      <td className="songlist__item">{songData.rating}</td>
    </tr>
  );
};

export default Song;
