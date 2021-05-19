import React, { useReducer, createContext } from 'react';

const reducer = (state, action) => {

    let schemaCopy = [...state.schema];

    switch (action.type) {
        case 'add_table':
            schemaCopy.push({
                table: "",
                columns: [{
                    column: "",
                    config: {
                        migrations: "",
                        validations: "",
                        backpack: ""
                    }
                }]
            });
            return { schema: schemaCopy };

        case 'add_column':
            schemaCopy[action.payload].columns.push({
                column: "",
                config: {
                    migrations: "",
                    validations: "",
                    backpack: ""
                }
            });
            return { ...state, schema: schemaCopy };



        case 'update_table_name':
            schemaCopy[action.payload.index].table = action.payload.value;
            return { ...state, schema: schemaCopy }

        case 'update_column_name':
            schemaCopy[action.payload.tableIndex].columns[action.payload.columnIndex].column = action.payload.value;
            return { ...state, schema: schemaCopy }

        case 'update_column_config':
            schemaCopy[action.payload.tableIndex].columns[action.payload.columnIndex].config[action.payload.config] = action.payload.value;
            return { ...state, schema: schemaCopy }

        case 'delete_column':
            schemaCopy[action.payload.tableIndex].columns.splice(action.payload.fieldIndex, 1);
            console.log('deleted_column', schemaCopy)
            return { ...state, schema: schemaCopy }

        case 'delete_table':
            schemaCopy.splice(action.payload.tableIndex, 1);
            console.log('deleted_column', schemaCopy)
            return { ...state, schema: schemaCopy }

        default:
            return state;
    }
}

export const SchemaContext = createContext();

export const SchemaContextProvider = (props) => {
    const [state, dispatch] = useReducer(reducer, {
        schema: [{
            table: "",
            columns: [{
                column: "",
                config: {
                    migrations: "",
                    validations: "",
                    backpack: ""
                }
            }]
        }]
    });

    return (
        <SchemaContext.Provider value={{
            schema: state.schema,
            addColumn: (index) => dispatch({ type: 'add_column', payload: index }),
            addTable: () => dispatch({ type: 'add_table' }),
            updateTableName: (value, index) => dispatch({ type: 'update_table_name', payload: { value, index } }),
            updateColumnName: (value, tableIndex, columnIndex) => dispatch({ type: 'update_column_name', payload: { value, tableIndex, columnIndex } }),
            updateColumnConfig: (config, value, tableIndex, columnIndex) => dispatch({ type: 'update_column_config', payload: { config, value, tableIndex, columnIndex } }),
            deleteTable: (columnIndex) => dispatch({ type: 'delete_table', payload: { columnIndex } }),
            deleteColumn: (tableIndex, columnIndex) => dispatch({ type: 'delete_column', payload: { tableIndex, columnIndex } })
        }}>
            { props.children}
        </SchemaContext.Provider>)
}