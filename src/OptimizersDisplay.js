import React, { useState, useEffect } from 'react';
import axios from 'axios';

function OptimizersDisplay() {
  const [optimizers, setOptimizers] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8000/optimizers')
      .then(response => {
        setOptimizers(response.data.optimizers);
      })
      .catch(error => {
        console.error('Error fetching optimizers:', error);
      });
  }, []);

  return (
    <div>
      <h2>Optimizers Metadata</h2>
      {/* Render optimizers metadata here, e.g., in a table */}
    </div>
  );
}

export default OptimizersDisplay;
