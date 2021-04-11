import React, { useContext } from 'react';
import { FaPlusCircle, FaTrashAlt } from 'react-icons/fa';
import Field from './Field';
import { SchemaContext } from '../contexts/schemaContext';

const Table = (props) => {
    const { table, index } = props;
    const { addTable, addColumn, schema, updateTableName } = useContext(SchemaContext);

    const handleChange = (event) => {
        updateTableName(event.target.value, index)
    }
    return (
        <div className="mb-10 ">
            <div className="flex flex-row border-b-2 mb-3 bg-purple-600 justify-between py-2 px-2 items-center">
                <div className="flex flex-row justify-between  px-2 items-center cursor-pointer">
                    <FaTrashAlt className="text-red-600" />
                    <p className=" font-p pl-3 text-red-600">
                        Delete table
                    </p>
                </div>

                <div className="flex flex-row justify-between  px-2 items-center cursor-pointer" onClick={addTable}>

                    <p className=" font-p pr-3 text-white">
                        Add table
                    </p>
                    <FaPlusCircle className="text-white" />
                </div>

            </div>

            <div className="py-3 flex flex-row mb-3">
                <input
                    value={schema[index].column}
                    onChange={handleChange}
                    type="text"
                    placeholder="Table name"
                    className="placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 focus:border-purple-500 border-0 border-b-2 border-gray-100 flex-grow " />
                {/* Add a column input block start */}
                <div className="flex flex-row flex-grow justify-end items-center cursor-pointer pr-4" onClick={() => { addColumn(index) }}>
                    <p className="font-p pr-2">Add a column</p>
                    <FaPlusCircle className="text-purple-700 " />
                </div>
                {/* Add a column input block end */}
            </div>
            {/* Add a table input block end */}
            {table.columns.map((column, idx) => <Field
                column={column}
                tableIndex={index}
                fieldIndex={idx}
                key={index.toString()} />)}

        </div>
    )
}

export default Table;