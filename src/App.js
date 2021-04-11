import React from 'react';
import { FaPlusCircle } from 'react-icons/fa';

const App = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded py-10 px-16">
            <h1 className="text-4xl font-title text-purple-700">Let us create a schema for you</h1>

            <div className="mt-10">
              <form>
                {/* Add a table input block start */}
                <div className="flex flex-row border-b-2 pb-2 cursor-pointer">
                  <p className="flex-grow font-p pl-3">Add a table</p>
                  <FaPlusCircle className="flex-none text-purple-700" />
                </div>

                <div className="py-3 flex flex-row">
                  <input type="text" placeholder="Table name" className="placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 focus:border-purple-500 border-0 border-b-2 border-gray-100 flex-grow " />
                  {/* Add a column input block start */}
                  <div className="flex flex-row flex-grow justify-end items-center cursor-pointer">
                    <p className="font-p pr-2">Add a column</p>
                    <FaPlusCircle className="text-purple-700 " />
                  </div>
                  {/* Add a column input block end */}
                </div>
                {/* Add a table input block end */}

                <div className="ml-16 flex flex-row justify-between">
                  <div>
                    <input type="text" placeholder="Column name" className="placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 focus:border-purple-500 border-0 border-b-2 border-gray-100 flex-grow " />
                  </div>
                  <div>
                    <div>
                      <label className="text-purple-500 mr-3">Migration:</label>
                      <input type="text" placeholder="Column type" className="placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 focus:border-purple-500 border-0 border-b-2 border-gray-100 flex-grow " />
                    </div>
                    <div>
                      <label className="text-purple-500 mr-3">Validation:</label>
                      <input type="text" placeholder="Field validation" className="placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 focus:border-purple-500 border-0 border-b-2 border-gray-100 flex-grow " />
                    </div>
                    <div>
                      <label className="text-purple-500 mr-3">Backpack:</label>
                      <input type="text" placeholder="Field in backpack" className="placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 focus:border-purple-500 border-0 border-b-2 border-gray-100 flex-grow " />
                    </div>
                  </div>
                </div>
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
