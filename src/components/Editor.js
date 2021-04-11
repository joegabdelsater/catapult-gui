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
    // setCode(`${JSON.stringify(schema)}`)
    let codeString = `{\n`;
    schema.map((table) => {
      let tableString = `\t"${table.table}" : {\n`;

      let columnString = ``;
      table.columns.map((column) => {
        columnString += `\t\t"${column.column}" : {\n`

        Object.keys(column.config).map((config) => {
          let configStringArray = [];
          if (column.config[config] !== "") {
            configStringArray.push(`\t\t\t\t "${config}" : "${column.config[config]}"`);
          }
          console.log(configStringArray)
          let configString = configStringArray.join(',')
          configString += '\n'
          columnString += configString
        })
        columnString += `\t\t\t\t}\n`
      })
      tableString += columnString;
      tableString += `\n\t}`;
      codeString += tableString;
    })
    codeString += `\n}`
    setCode(codeString)
  };

  // useEffect(() => {
  //   Prism.highlightAll();
  // }, []);
  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}