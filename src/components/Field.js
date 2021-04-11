import React, { useState } from 'react';

const Field = ({field}) => { 
    return (
        <div className="ml-16 mt-5 flex flex-row justify-between">
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
    );
}


export default Field;