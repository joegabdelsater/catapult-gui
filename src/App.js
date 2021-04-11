import React, { useState } from 'react';
import Table from './components/Table';
import { table as tableTemplate, field as fieldTemplate } from './templates/schema';

const App = () => {
  const [schema, setSchema] = useState([tableTemplate]);

  const handleAddTable = () => {
    let schemaCopy = [...schema];
    schemaCopy.push(tableTemplate);
    console.log('added table', schemaCopy)
    setSchema(schemaCopy)
  }

  const handleAddColumn = (tableIndex) => {
    console.warn(tableIndex)
    let schemaCopy = [...schema];
    schemaCopy[tableIndex].columns.push(fieldTemplate);
    console.log('added column', schemaCopy)
    setSchema(schemaCopy)
  }

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded py-10 px-16">
            <h1 className="text-4xl font-title text-purple-700">Let us create a schema for you</h1>
            <div className="mt-10">
              <form>
                {schema.map((table, index) =>
                  <Table
                    table={table}
                    handleAddTable={handleAddTable}
                    handleAddColumn={() => handleAddColumn(index)}
                    key={index.toString()}
                  />)}
              </form>
            </div>
          </div>
          <div>Hey2</div>
        </div>
      </div>
    </div>
  );
}

export default App;
