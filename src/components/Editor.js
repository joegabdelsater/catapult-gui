import React, { useState, useEffect, useContext } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { SchemaContext } from '../contexts/schemaContext';


export default function Code({ language }) {
  const { schema } = useContext(SchemaContext);
  const [code, setCode] = useState(``)
  useEffect(() => {
    parseSchema()
    Prism.highlightAll();
  })

  const parseSchema = () => {
    let tablesArray = [];
    let schemaString = ``
    //Loop over all the tables
    schema.map((table) => {
      const currentTable = table.table;
      let finalTable = ``;
      let columnArray = [];
      //Loop over the table columns
      table.columns.map((column) => {
        const currentColumn = column.column
        let finalColumn = ``;
        const configurations = Object.keys(column.config);
        let configurationsArray = [];
        let finalConfiguration = ``;
        //Loop over the column's configuration
        configurations.map((configuration) => {
          const currentConfiguration = column.config[configuration];
          if (currentConfiguration !== "") {
            configurationsArray.push(`"${configuration}" : "${currentConfiguration}"`);
          }
        })

        //finish parsing the configurations
        finalConfiguration = `\t\t` + configurationsArray.join(`,\n\t\t\t`);
        finalConfiguration = `{\n\t` + finalConfiguration + `\n\t\t}`;

        //finish parsing the column ad push it to the final column array
        finalColumn += `\t"${currentColumn}" : ${finalConfiguration}`
        columnArray.push(finalColumn)
      })

      finalTable += `"${currentTable}" : ` + `{\n\t` + columnArray.join(`,\n`) + '\n\t}'
      tablesArray.push(finalTable)
    });
    schemaString = `{\n\t` + tablesArray.join(",\n\t") + `\n}`
    setCode(schemaString);
    console.log(code)
  }

  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre >
    </div>
  );
}