import React, { useState } from 'react'
import { Table, Row, Button } from 'react-bootstrap';
import * as XLSX from 'xlsx';
import DataTable from 'react-data-table-component';

import './style.css';

export default function NewCymbalPackCSV() {
    document.title = `NewCymbalPackCSV - IMS - Wavemg`;

    const [tableDisplay, setTableDisplay] = useState({ display: "block" }); // Handble state for Table display or not
    const [uploadButtonDisplay, setUploadButtonDisplay] = useState({ display: "none" }); // Handble state for Upload Button display or not
    const [columns, setColumns] = useState([]);
    const [data, setData] = useState([]);

    const [listsCSV, setListsCSV] = useState([]);


    // process CSV data
    const processData = dataString => {
        const dataStringLines = dataString.split(/\r\n|\n/);
        const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
        // console.log("headers");
        // console.log(headers);
        // TODO: If headers.length > 4, return error and stop processing - This numbers of columns are four (category / description / group_code / dealer_price)

        const list = [];
        for (let i = 1; i < dataStringLines.length; i++) {
            const row = dataStringLines[i].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
            if (headers && row.length === headers.length) {
                const obj = {};
                for (let j = 0; j < headers.length; j++) {
                    let d = row[j];
                    if (d.length > 0) {
                        if (d[0] === '"')
                            d = d.substring(1, d.length - 1);
                        if (d[d.length - 1] === '"')
                            d = d.substring(d.length - 2, 1);
                    }
                    if (headers[j]) {
                        obj[headers[j]] = d;
                    }
                }

                // remove the blank rows
                if (Object.values(obj).filter(x => x).length > 0) {
                    list.push(obj);
                }
            }
        }

        // prepare columns list from headers
        const columns = headers.map(c => ({
            name: c,
            selector: c,
        }));

        //Store lists of CSV to ListsCSV state to use it with UploadToDB button
        setListsCSV(list);

        setData(list);
        setColumns(columns);
    }
    // handle file upload
    function handleFileUpload(e) {
        setUploadButtonDisplay({ display: "block" })
        setTableDisplay({ display: "none" });
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = (evt) => {
            /* Parse data */
            const bstr = evt.target.result;
            const wb = XLSX.read(bstr, { type: 'binary' });

            /* Get first worksheet */
            const wsname = wb.SheetNames[0];
            const ws = wb.Sheets[wsname];
            /* Convert array of arrays */
            const data = XLSX.utils.sheet_to_csv(ws, { header: 1 });
            processData(data);
        };
        reader.readAsBinaryString(file);

    }

    // Handle file upload to DB
    function handleUploadLists(e) {
        e.preventDefault()

         //TODO:Add Data to DB by using list
        console.log(listsCSV);
        alert("The lists are stored to DB");
    }

    return (
        <div className="shadow ml-5 mr-3 mb-4 p-5 bg-white rounded" style={{width:"900px"}}>
            <Row className="mb-3">
                <h4>Upload your CSV File for Packages</h4>
            </Row>

            <Row className="mb-5 ml-2">
                    <input type="file" name="File Upload" accept=".csv, .xlsx, .xls" className="btn" onChange={handleFileUpload} />
                    <Button style={uploadButtonDisplay} onClick={handleUploadLists}>Upload Lists to DB</Button>
            </Row>
            <Row className="mt-5">
                <DataTable pagination highlightOnHover columns={columns} data={data} />
            </Row>
            <Row>
                <div style={tableDisplay}>
                    <h5 className="text-secondary">Document Template</h5>
                    <Table hover>
                        <thead>
                            <tr>
                                <th>category</th>
                                <th>description</th>
                                <th>packageCode</th>
                                <th>dealer_price</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Zildjian</td>
                                <td>K pack</td>
                                <td>K0800</td>
                                <td>655</td>
                            </tr>
                            <tr>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Row>
        </div>
    )
}
