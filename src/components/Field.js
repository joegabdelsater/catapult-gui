import React, { useContext, useState, useEffect } from 'react';
import { FaTrashAlt, FaCode } from 'react-icons/fa';
import { SchemaContext } from '../contexts/schemaContext';
import ExplicitEditor from './ExplicitEditor'

const Field = (props) => {
    const { tableIndex, fieldIndex } = props;
    const { schema, updateColumnName, updateColumnConfig, deleteColumn } = useContext(SchemaContext);
    const [showEditor, setShowEditor] = useState(false);

    useEffect(() => {});

    const handleChange = (event) => {
        console.log('config changed')

        updateColumnName(event.target.value, tableIndex, fieldIndex)
    }

    const handleConfig = (config, event) => {
        console.log('column config changed')
        updateColumnConfig(config, event.target.value, tableIndex, fieldIndex)
    }

    const handleColumnDelete = () => {
        if(window.confirm('Delete Column: ' + schema[tableIndex].columns[fieldIndex].column)){
            deleteColumn(tableIndex, fieldIndex);
        }
    }

    const handleShowEditor = (e) => {
        e.preventDefault();
        setShowEditor(true)
    };
    const handleHideEditor = (e) => {
        e.preventDefault();
        setShowEditor(false)
    };

    const handleSaveEditor = (e, config, value) => {
        e.preventDefault();
        updateColumnConfig(config,value, tableIndex, fieldIndex)
        setShowEditor(false)
    };

    

    return (
        <div className=" mt-5 flex flex-row justify-between">
            <div>
                <div className="flex flex-row justify-between items-center">
                    <FaTrashAlt className="text-red-600 cursor-pointer" onClick={handleColumnDelete} />
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
                        value={schema[tableIndex].columns[fieldIndex].config.migrations}
                        onChange={(event) => handleConfig('migrations', event)}
                        type="text"
                        placeholder="Column type"
                        className="placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 focus:border-purple-500 border-0 border-b-2 border-gray-100 flex-grow " />
                </div>
                <div>
                    <label className="text-purple-500 mr-3">Validation:</label>
                    <input
                        value={schema[tableIndex].columns[fieldIndex].config.validations}
                        onChange={(event) => handleConfig('validations', event)}
                        type="text"
                        placeholder="Field validation"
                        className="placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 focus:border-purple-500 border-0 border-b-2 border-gray-100 flex-grow " />
                </div>
                <div>
                    <label className="text-purple-500 mr-3">Backpack:       
                   
                    </label>
                    <input
                        value={schema[tableIndex].columns[fieldIndex].config.backpack}
                        onChange={(event) => handleConfig('backpack', event)}
                        type="text"
                        placeholder="Field in backpack"
                        className="placeholder-gray-500 placeholder-opacity-50 focus:outline-none focus:ring-0 focus:border-purple-500 border-0 border-b-2 border-gray-100 flex-grow" />

<button className="bg-purple-400 py-1 px-1 rounded ml-1" onClick={handleShowEditor}>
                    <FaCode className="text-white"/>
                    </button>

                  {  showEditor && <ExplicitEditor 
                  columnName={schema[tableIndex].columns[fieldIndex].column}
                  onClose={handleHideEditor}
                   onSave={handleSaveEditor}
                   value={schema[tableIndex].columns[fieldIndex].config.backpack}
                   />}
                </div>
            </div>
        </div>
    );
}


export default Field;