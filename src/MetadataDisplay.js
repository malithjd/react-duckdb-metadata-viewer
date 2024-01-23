import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MetadataDisplay() {
  const [metadata, setMetadata] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8000/metadata')
      .then(response => {
        setMetadata(response.data.metadata);
      })
      .catch(error => {
        console.error('Error fetching metadata:', error);
      });
  }, []);

  return (
    <div>
      <h2>Database Metadata</h2>
      {Object.entries(metadata).map(([tableName, columns]) => (
        <div key={tableName}>
          <h3>{tableName}</h3>
          <table>
            <thead>
              <tr>
                <th>Column Name</th>
                <th>Data Type</th>
                <th>Nullable</th>
                {/* Add more headers if needed */}
              </tr>
            </thead>
            <tbody>
              {columns.map((columnDetails, index) => (
                <tr key={index}>
                  <td>{columnDetails[0]}</td> {/* Column Name */}
                  <td>{columnDetails[1]}</td> {/* Data Type */}
                  <td>{columnDetails[2]}</td> {/* Nullable */}
                  {/* Add more column details if present */}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ))}
    </div>
  );
}

export default MetadataDisplay;
