import React, { useReducer, createContext } from 'react';

const reducer = (state, action) => {
   
    let schemaCopy = [...state.schema];
  
    switch (action.type) {
        case 'add_table':
            // let schemaCopy = [...state.schema];
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
            return {schema: schemaCopy};

        case 'add_column':
            schemaCopy[action.payload].columns.push({
                column: "",
                config: {
                    migrations: "",
                    validations: "",
                    backpack: ""
                }
            });
            return {...state,schema: schemaCopy};
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
    
    return (<SchemaContext.Provider
        value={{
            schema: state.schema,
            addColumn: (index) => dispatch({ type: 'add_column', payload: index }),
            addTable: () => dispatch({ type: 'add_table' }),
        }}
    >
        {props.children}
    </SchemaContext.Provider>)
}

