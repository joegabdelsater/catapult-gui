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

    let columnString = ``;
    let tableString = ``;
    schema.map((table) => {
  tableString = `\t"${table.table}" : {\n`;
  
      table.columns.map((column) => {
        let columnStringArray = [];
        columnStringArray.push(`\t\t"${column.column}" : {\n`);
        // columnString += `\t\t"${column.column}" : {\n`
        let configStringArray = [];

        Object.keys(column.config).map((config) => {
          if (column.config[config] !== "") {
            configStringArray.push(`\t\t\t\t "${config}" : "${column.config[config]}"`);
          }
        })
        let configString = configStringArray.join(',\n')
        configString += '\n'
        columnString = columnStringArray.join(",")
        columnString += configString
        columnString += `\t\t\t\t}\n`
      })
      tableString += columnString;
      tableString += `\n\t\t\t}`;
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