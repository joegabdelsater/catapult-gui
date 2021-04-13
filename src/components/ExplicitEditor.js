import React, { useState, useEffect, useContext } from "react";

import Prism from "prismjs";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs/components/prism-core";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-javascript";

const ExplicitEditor = (props) => {
    const { onClose, onSave, columnName } = props
    const [code, setCode] = useState(`{
                    "list" : {

                        },
                    "create": {

                        }
                }
`)

    return (
        <div className="w-6/12 pb-10 px-10 bg-gray-100 absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 border-purple-500 border-8 rounded shadow-2xl">
            <div className="flex flex-row justify-between items-center py-5">
                <h1 className="font-title text-lg">Column: {columnName}</h1>
                <div>
                    <button className="bg-gray-700 py-2 px-3 text-yellow-300 rounded mr-5" onClick={onClose}>
                        Close
                    </button>

                    <button className="bg-purple-500 py-2 px-3 text-white rounded" onClick={(e) => onSave(e, 'backpack', code)
                    }>
                        Done
                    </button>
                </div>

            </div>
            <Editor
                value={code}
                onValueChange={(code) => {
                    code.replace(" ", `\t\t\t\t\t\t\t\t\t\t\t`);
                    setCode(code)
                }
                }
                highlight={(code) => highlight(code, languages.js)}
                padding={10}
                style={{
                    overflowY: "scroll",
                    fontFamily: '"Fira code", "Fira Mono", monospace',
                    fontSize: 16,
                    backgroundColor: '#2d2d2d',
                    color: 'white',
                    height: 400,
                }}
            />
        </div>
    )
}

export default ExplicitEditor;