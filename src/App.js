import React from 'react';
import Code from './components/Editor';
import 'prismjs/components/prism-json';
import { SchemaContextProvider } from './contexts/schemaContext';
import Form from './components/Form';

const App = () => {
  return (
    <>
      <div className="bg-purple-500">
        <div className="container">
          <div className="flex flex-row justify-between items-center h-16">
            <h1 className="text-white font-title text-3xl">Laravel <span className="animate-pulse text-yellow-300 ">Catapult</span></h1>
            <ul >
              <li className="inline-block pl-10 ">
                <a href="https://laravel.com/docs/8.x/validation" target="_blank" className="text-white font-title">Laravel Validation</a>
              </li>
              <li className="inline-block pl-10">
                <a href="https://laravel.com/docs/8.x/migrations" target="_blank" className="text-white font-title">Laravel Migrations</a>
              </li >
              <li className="inline-block pl-10">
                <a href="https://backpackforlaravel.com/docs/4.1/crud-columns" target="_blank" className="text-white font-title">Backpack Columns</a>
              </li>
              <li className="inline-block pl-10">
                <a href="https://backpackforlaravel.com/docs/4.1/crud-fields" target="_blank" className="text-white font-title">Backpack Fields</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
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
          </div>
        </div>
      </SchemaContextProvider>
    </>
  );
}

export default App;
