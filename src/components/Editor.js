import React, { useState, useEffect, useContext } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import { SchemaContext } from '../contexts/schemaContext';
import { FaRegCopy } from 'react-icons/fa';



export default function Code({ language }) {
  const { schema } = useContext(SchemaContext);
  const [code, setCode] = useState(``)

  useEffect(() => {
    parseSchema()
    Prism.highlightAll();
  })

  // const download = (event) => {
  //   event.preventDefault();
  //   // Prepare the file
  //   // Download it
  //   const blob = new Blob([code]);
  //   const fileDownloadUrl = URL.createObjectURL(blob);
  //   this.setState({ fileDownloadUrl: fileDownloadUrl },
  //     () => {
  //       this.dofileDownload.click();
  //       URL.revokeObjectURL(fileDownloadUrl);  // free up storage--no longer needed.
  //       this.setState({ fileDownloadUrl: "" })
  //     })
  // }


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

          if(currentConfiguration.includes("{")){
            configurationsArray.push(`"${configuration}" : ${currentConfiguration}`);
          }else if (currentConfiguration !== "" && !currentConfiguration.includes("{")) {
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
  }

  return (
    <div className="Code  bg-gray-100">
      <div className="flex justify-end mt-16 bg-gray-100">
        <button onClick={() => { navigator.clipboard.writeText(code) }}
          className="flex items-center bg-gray-700 justify-center py-2 px-2 rounded text-yellow-200">
          Copy to Clipboard
        <FaRegCopy style={{ marginLeft: 10 }} />
        </button>
      </div>

      <pre>
        <code className={`language-${language}` }>{code}</code>
      </pre >
    </div>
  );
}