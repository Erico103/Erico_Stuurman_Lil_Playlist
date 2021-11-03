import React, {useState} from "react";
import data from "./mock-data.json"


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
    </div>
  );
}

export default Table;
