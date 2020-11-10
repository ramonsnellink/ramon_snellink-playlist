const Song = ({ songData }) => {
  return (
    <tr>
      <td>{songData.title}</td>
      <td>{songData.artist}</td>
      <td>{songData.genre}</td>
      <td>{songData.rating}</td>
    </tr>
  );
};

export default Song;
