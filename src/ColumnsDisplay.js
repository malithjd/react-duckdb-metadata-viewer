import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ColumnsDisplay() {
  const [columns, setColumns] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/columns')
      .then(response => {
        setColumns(response.data.columns);
      })
      .catch(error => {
        console.error('Error fetching columns:', error);
      });
  }, []);

  return (
    <div>
      <h2>Columns Metadata</h2>
      <table>
        <thead>
          <tr>
            {/* Add headers based on your columns metadata */}
            <th>Column Name</th>
            <th>Details</th>
          </tr>
        </thead>
        <tbody>
          {columns.map((column, index) => (
            <tr key={index}>
              {/* Modify these according to the structure of your columns data */}
              <td>{column[0]}</td>
              <td>{column.slice(1).join(', ')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ColumnsDisplay;
