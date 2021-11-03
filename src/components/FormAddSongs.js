import React, { useState } from "react";

function FormAddSongs() {
  const[addFormData, setAddFormData]= useState({
    song: "song",
    artist: "artist",
    genre: "genre",
    rating: "rating"
  })

  const handleAddFormChange = (event) => { 
    event.preventDefault();
    const fieldName= event.target.getAttribute('name')
    const fieldValue  = event.target.value

    const newFormData = {...addFormData};
    newFormData[fieldName]=fieldValue;

    setAddFormData(newFormData)
  }
  return <div>
  <form>
<input
    type="text"
    name="song"
    required="required"
    placeholder="Enter a song"
     onChange={handleAddFormChange}
  />
  <input
    type="text"
    name="artist"
    required="required"
    placeholder="Enter the artist..."
     onChange={handleAddFormChange}
  />
  <input
    type="text"
    name="genre"
    required="required"
    placeholder="Enter a genre."
     onChange={handleAddFormChange}
  />
  <input
    type="number"
    name="rating"
    required="required"
    placeholder="Enter a rating"
     onChange={handleAddFormChange}
  />
  <button type="submit">Add</button>
</form>
  </div>;
}

export default FormAddSongs
