// App.js
import React, { useState } from 'react';
import MetadataDisplay from './MetadataDisplay';
import ColumnsDisplay from './ColumnsDisplay';
import SchemasDisplay from './SchemasDisplay';
import TablesDisplay from './TablesDisplay';
import './App.css';

function App() {
  const [activeComponent, setActiveComponent] = useState('metadata');

  return (
    <div className="App">
      <h1>DuckDB Metadata Viewer</h1>
      <div className="navigation">
        <button onClick={() => setActiveComponent('metadata')}>Metadata</button>
        <button onClick={() => setActiveComponent('columns')}>Columns</button>
        <button onClick={() => setActiveComponent('schemas')}>Schemas</button>
        <button onClick={() => setActiveComponent('tables')}>Tables</button>
      </div>
      <div className="container">
        {activeComponent === 'metadata' && <MetadataDisplay />}
        {activeComponent === 'columns' && <ColumnsDisplay />}
        {activeComponent === 'schemas' && <SchemasDisplay />}
        {activeComponent === 'tables' && <TablesDisplay />}
      </div>
    </div>
  );
}

export default App;
