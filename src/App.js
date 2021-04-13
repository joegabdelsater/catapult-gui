import React from 'react';
import Code from './components/Editor';
import 'prismjs/components/prism-json';
import { SchemaContextProvider } from './contexts/schemaContext';
import Form from './components/Form';
import ExplicitEditor from './components/ExplicitEditor';

const App = () => {
  return (
    <SchemaContextProvider>
      <div className="bg-gray-100 min-h-screen relative">
        <div className="container ">
          <div className="grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white rounded py-10 px-16 mt-10 shadow-xl">
              <h1 className="text-4xl font-title text-purple-700">Let us create a schema for you</h1>
              <Form />
            </div>
            <div>
              <Code language={'webmanifest'} />
            </div>
          </div>
          <ExplicitEditor />
        </div>
      </div>
    </SchemaContextProvider>
  );
}

export default App;
