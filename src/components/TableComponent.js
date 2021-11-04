import React, { useState, Fragment } from "react";
import { nanoid } from "nanoid";
import "../App.css";
import data from "./mock-data.json";
 import ReadOnlyRow from "./ReadOnlyRow";
 import EditableRow from "./EditableRow";

const App = () => {
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    song: "",
    artist: "",
    genre: "",
    rating: "",
  });

  const [editFormData, setEditFormData] = useState({
    song: "",
    artist: "",
    genre: "",
    rating: "",
  });

  const [editContactId, setEditContactId] = useState(null);

  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };

  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);
  };

  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      song: addFormData.song,
      artist: addFormData.artist,
      genre: addFormData.genre,
      rating: addFormData.rating,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };

  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
     song: editFormData.song,
      artist: editFormData.artist,
      genre: editFormData.genre,
     rating: editFormData.rating,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      song: contact.song,
      artist: contact.artist,
      genre: contact.genre,
      rating: contact.rating,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
  };

  return (
    <div className="app-container">
      <form onSubmit={handleEditFormSubmit}>
        <table>
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Genre</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow
                    contact={contact}
                    handleEditClick={handleEditClick}
                    handleDeleteClick={handleDeleteClick}
                  />
                )}
              </Fragment>
            ))}
          </tbody>
        </table>
      </form>

      <h2>Add a Contact</h2>
      <form onSubmit={handleAddFormSubmit}>
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
          placeholder="Enter a artist"
          onChange={handleAddFormChange}
        />
        <input
          type="text"
          name="genre"
          required="required"
          placeholder="Enter a genre"
          onChange={handleAddFormChange}
        />
        <input
          type="number"
          name="rating"
          required="required"
          placeholder="rating"
          onChange={handleAddFormChange}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default App;