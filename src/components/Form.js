import React, {useContext} from 'react';
import Table from './Table';
import {SchemaContext} from './../contexts/schemaContext';

const Form = () => {
    const {schema }  = useContext(SchemaContext)
    return (
        <div className="mt-10">
            <form>
                {schema.map((table, index) =>
                    <Table
                        table={table}
                        index={index}
                        // handleAddTable={handleAddTable}
                        // handleAddColumn={() => handleAddColumn(index)}
                        key={index.toString()}
                    />)}
            </form>
        </div>
    )
}

export default Form