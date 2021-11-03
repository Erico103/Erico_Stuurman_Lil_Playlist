import React, {useState} from "react";
import data from "./mock-data.json"
import FormAddSongs from "../components/FormAddSongs"


function Table() {

const [contacts, setcontacts] = useState(data)

  return (
    <div className="app-container">
      <table>
        <thead>
          <tr>
            <th>Song</th>
            <th>artist</th>
            <th>Genre</th>
            <th>Rating</th>
          </tr>
        </thead>

        <tbody>
          {contacts.map((item)=>(
           <tr>
          <td>{item.song}</td>
          <td>{item.artist}</td>
          <td>{item.genre}</td>
          <td>{item.rating}</td>
          </tr> 
          ))}
          
        </tbody>
      </table>
      <h2>Add a song</h2>
     <FormAddSongs/>
    </div>
  );
}

export default Table;
