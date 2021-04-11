import React, { useState, useEffect, useContext } from 'react';
import Table from './components/Table';
import { table as tableTemplate, field as fieldTemplate } from './templates/schema';
import Code from './components/Editor';
import 'prismjs/components/prism-json';
import { SchemaContextProvider } from './contexts/schemaContext';
import Form from './components/Form';
const App = () => {



  const [code, setCode] = useState(`{
    "test":"test"
  }`);

  const handleAddTable = () => {
    let schemaCopy = [...schema];
    schemaCopy.push({
      table: "",
      columns: [{
        column: "",
        config: {
          migrations: "",
          validations: "",
          backpack: ""
        }
      }]
    });
    setSchema(schemaCopy)
  }
  const [schema, setSchema] = useState([{
    table: "",
    columns: [{
      column: "",
      config: {
        migrations: "",
        validations: "",
        backpack: ""
      }
    }]
  }]);

  const handleAddColumn = (tableIndex) => {
    let schemaCopy = [...schema];
    schemaCopy[tableIndex].columns.push({
      column: "",
      config: {
        migrations: "",
        validations: "",
        backpack: ""
      }
    });
    setSchema(schemaCopy)
  }

  // useEffect(() => {

  // }, []);

  return (
    <SchemaContextProvider>
      <div className="bg-gray-100 min-h-screen">
        <div className="container">
          <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded py-10 px-16">
              <h1 className="text-4xl font-title text-purple-700">Let us create a schema for you</h1>
              <Form />
            </div>
            <div>
              <Code code={code} language={'webmanifest'} />
            </div>
          </div>
        </div>
      </div>
    </SchemaContextProvider>
  );
}

export default App;
