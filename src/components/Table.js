import React, { useState, useContext } from 'react';
import { FaPlusCircle } from 'react-icons/fa';
import Field from './Field';
import {SchemaContext} from '../contexts/schemaContext';

const Table = (props) => {
    const { table, index } = props;
    const {addTable, addColumn} = useContext(SchemaContext);

    return (
        <div className="mb-10 ">
            <div className="flex flex-row border-b-2  cursor-pointer mb-3 bg-purple-600 justify-between py-2 pr-2 items-center" onClick={addTable}>
                <p className=" font-p pl-3 text-white">Add a table</p>
                <FaPlusCircle className="text-white" />
            </div>

            <div className="py-3 flex flex-row mb-3">
                <input type="text" placeholder="Table name" className="placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 focus:border-purple-500 border-0 border-b-2 border-gray-100 flex-grow " />
                {/* Add a column input block start */}
                <div className="flex flex-row flex-grow justify-end items-center cursor-pointer" onClick={() =>{ addColumn(index)}}>
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