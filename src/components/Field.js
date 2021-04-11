import React, { useContext } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import { SchemaContext } from '../contexts/schemaContext';

const Field = (props) => {
    const { tableIndex, fieldIndex } = props;
    const { schema, updateColumnName, updateColumnConfig } = useContext(SchemaContext);

    const handleChange = (event) => {
        updateColumnName(event.target.value, tableIndex, fieldIndex)
    }

    const handleConfig = (config, event) => {
        updateColumnConfig(config, event.target.value, tableIndex, fieldIndex)
    }

    return (
        <div className="ml-8 mt-5 flex flex-row justify-between">
            <div>
                <div className="flex flex-row justify-between items-center">
                    <FaTrashAlt className="text-red-600 cursor-pointer" />
                    <input
                        value={schema[tableIndex].columns[fieldIndex].column}
                        onChange={handleChange}
                        type="text"
                        placeholder="Column name"
                        className="ml-8 placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 focus:border-purple-500 border-0 border-b-2 border-gray-100 flex-grow " />
                </div>
            </div>
            <div>
                <div>
                    <label className="text-purple-500 mr-3">Migration:</label>
                    <input
                        value={schema[tableIndex].columns[fieldIndex].column.migrations}
                        onChange={(event) => handleConfig('migrations', event)}
                        type="text"
                        placeholder="Column type"
                        className="placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 focus:border-purple-500 border-0 border-b-2 border-gray-100 flex-grow " />
                </div>
                <div>
                    <label className="text-purple-500 mr-3">Validation:</label>
                    <input
                        value={schema[tableIndex].columns[fieldIndex].column.validations}
                        onChange={(event) => handleConfig('validations', event)}
                        type="text"
                        placeholder="Field validation"
                        className="placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 focus:border-purple-500 border-0 border-b-2 border-gray-100 flex-grow " />
                </div>
                <div>
                    <label className="text-purple-500 mr-3">Backpack:</label>
                    <input
                        value={schema[tableIndex].columns[fieldIndex].column.backpack}
                        onChange={(event) => handleConfig('backpack', event)}
                        type="text"
                        placeholder="Field in backpack"
                        className="placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 focus:border-purple-500 border-0 border-b-2 border-gray-100 flex-grow" />
                </div>
            </div>
        </div>
    );
}


export default Field;