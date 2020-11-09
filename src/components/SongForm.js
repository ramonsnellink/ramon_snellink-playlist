import React, { useState } from "react";

const SongForm = (props) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const [values, setValues] = useState({ title: "", artist: "", genre: "", rating: 0 });

  return (
    <form onSubmit={(e) => props.addSong(e, values)}>
      <input
        type="text"
        placeholder="Title"
        name="title"
        onChange={handleInputChange}
        value={values.title}
      />
      <input
        type="text"
        placeholder="Artist"
        name="artist"
        onChange={handleInputChange}
        value={values.artist}
      />
      <select name="genre" id="" onChange={handleInputChange}>
        <option value="none"></option>
        <option value="jazz">Jazz</option>
        <option value="rock">Rock</option>
        <option value="trance">Trance</option>
      </select>
      <select name="rating" id="" onChange={handleInputChange}>
        <option value={"0"}></option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      <button>Add Song</button>
    </form>
  );
};

export default SongForm;
