import React, { useState } from 'react';
import Table from './components/Table';
import { table as tableTemplate, field as fieldTemplate } from './templates/schema';
import Editor from 'react-simple-code-editor';
import Prism from 'prismjs';
import Code from './components/Editor';
import 'prismjs/components/prism-json';
const App = () => {
  const [schema, setSchema] = useState([tableTemplate]);
  const [code, setCode] = useState(`{
    "test":"test"
  }`);

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
          <div>
            <Code code={code} language={'webmanifest'} />
            {/* <Editor
              value={code}
              onValueChange={(code) => setCode(code)}
              highlight={(code) => Prism.highlight(code, Prism.languages.js)}
              padding={10}
              style={{
                fontFamily: '"Fira code", "Fira Mono", monospace',
                fontSize: 12,
                color:'white',
                backgroundColor: '#111'
              }}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
