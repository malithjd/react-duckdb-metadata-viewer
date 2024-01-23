// TablesDisplay.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/TablesDisplay.css'

function TablesDisplay() {
  const [tables, setTables] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/tables')
      .then(response => {
        console.log("Data received:", response.data); // Log the received data
        setTables(response.data.tables);
      })
      .catch(error => {
        console.error('Error fetching tables:', error);
      });
  }, []); // Removed 'tables' from dependency array

  return (
    <div>
      <h2>Tables Metadata</h2>
      <table className="table-metadata">
        <thead>
          <tr>
            <th>Database Name</th>
            <th>Database OID</th>
            <th>Schema Name</th>
            <th>Schema OID</th>
            <th>Table Name</th>
            <th>Table OID</th>
            <th>Internal</th>
            <th>Temporary</th>
            <th>Has Primary Key</th>
            <th>Estimated Size</th>
            <th>Column Count</th>
            <th>Index Count</th>
            <th>Check Constraint Count</th>
            <th>SQL</th>
          </tr>
        </thead>
        <tbody>
          {tables.map((table, index) => (
            <tr key={index}>
              <td>{table[0]}</td> {/* Database Name */}
              <td>{table[1]}</td> {/* Database OID */}
              <td>{table[2]}</td> {/* Schema Name */}
              <td>{table[3]}</td> {/* Schema OID */}
              <td>{table[4]}</td> {/* Table Name */}
              <td>{table[5]}</td> {/* Table OID */}
              <td>{table[6] ? 'Yes' : 'No'}</td> {/* Internal */}
              <td>{table[7] ? 'Yes' : 'No'}</td> {/* Temporary */}
              <td>{table[8] ? 'Yes' : 'No'}</td> {/* Has Primary Key */}
              <td>{table[9]}</td> {/* Estimated Size */}
              <td>{table[10]}</td> {/* Column Count */}
              <td>{table[11]}</td> {/* Index Count */}
              <td>{table[12]}</td> {/* Check Constraint Count */}
              <td>{table[13]}</td> {/* SQL */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TablesDisplay;
