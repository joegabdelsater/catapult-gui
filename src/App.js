import React from 'react';
// import { table as tableTemplate, field as fieldTemplate } from './templates/schema';
import Code from './components/Editor';
import 'prismjs/components/prism-json';
import { SchemaContextProvider } from './contexts/schemaContext';
import Form from './components/Form';
const App = () => {
  return (
    <SchemaContextProvider>
      <div className="bg-gray-100 min-h-screen">
        <div className="container">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded py-10 px-16 mt-10">
              <h1 className="text-4xl font-title text-purple-700">Let us create a schema for you</h1>
              <Form />
            </div>
            <div>
              <Code  language={'webmanifest'} />
            </div>
          </div>
        </div>
      </div>
    </SchemaContextProvider>
  );
}

export default App;
