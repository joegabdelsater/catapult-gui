import React, { useState } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import Field from './Field';
const Table = (props) => {
    const { table, handleAddTable, handleAddColumn } = props;

    return (
        <div className="mb-10">
            <div className="flex flex-row border-b-2 pb-2 cursor-pointer mb-3" onClick={handleAddTable}>
                <p className="flex-grow font-p pl-3">Add a table</p>
                <FaPlusCircle className="flex-none text-purple-700" />
            </div>

            <div className="py-3 flex flex-row mb-3">
                <input type="text" placeholder="Table name" className="placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 focus:border-purple-500 border-0 border-b-2 border-gray-100 flex-grow " />
                {/* Add a column input block start */}
                <div className="flex flex-row flex-grow justify-end items-center cursor-pointer" onClick={handleAddColumn}>
                    <p className="font-p pr-2">Add a column</p>
                    <FaPlusCircle className="text-purple-700 " />
                </div>
                {/* Add a column input block end */}
            </div>
            {/* Add a table input block end */}
            {table.columns.map((column, index) => <Field column={column} key={index.toString()} />)}

        </div>
    )
}

export default Table;