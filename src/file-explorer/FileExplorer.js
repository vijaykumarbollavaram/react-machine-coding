import './file-explorer.css'
import data from './data.json'
import { useState } from 'react';

function FileExplorer() {
    const [files, setFiles] = useState(data)
    return (
        <h1>File explorer</h1>
    )
}
export default FileExplorer;