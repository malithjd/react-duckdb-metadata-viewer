import React, { useState, useEffect } from 'react';
import axios from 'axios';

function SchemasDisplay() {
  const [schemas, setSchemas] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/schemas')
      .then(response => {
        setSchemas(response.data.schemas);
      })
      .catch(error => {
        console.error('Error fetching schemas:', error);
      });
  }, []);

  return (
    <div>
      <h2>Schemas Metadata</h2>
      <table>
        <thead>
          <tr>
            {/* Add headers based on your schemas metadata */}
            <th>Schema Detail</th>
          </tr>
        </thead>
        <tbody>
          {schemas.map((schema, index) => (
            <tr key={index}>
              {/* Modify these according to the structure of your schemas data */}
              <td>{schema.join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default SchemasDisplay;
