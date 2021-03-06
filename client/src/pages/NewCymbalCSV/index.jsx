import React, { useState } from 'react'
import { Table, Row, Button } from 'react-bootstrap';
import * as XLSX from 'xlsx';
import DataTable from 'react-data-table-component';
import API from '../../utils/API'

import './style.css';

export default function NewCymbalCSV() {
    document.title = `NewCymbalCSV - IMS - Wavemg`;

    const [tableDisplay, setTableDisplay] = useState({ display: "block" }); // Handble state for Table display or not
    const [uploadButtonDisplay, setUploadButtonDisplay] = useState({ display: "none" }); // Handble state for Upload Button display or not
    const [columns, setColumns] = useState([]);
    const [data, setData] = useState([]);

    const [listsCSV, setListsCSV] = useState([]);


    // process CSV data
    const processData = dataString => {
        const dataStringLines = dataString.split(/\r\n|\n/);
        const headers = dataStringLines[0].split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);

        console.log("headers");
        console.log(headers);
        // TODO: If 9 > headers.length > 9, return error and stop processing - This numbers of columns are NINE (category / type / size / description / code / qty / ebay_price / website_price / group_code)

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


        //Add columns style
        columns[0]["width"] = "100px";
        columns[1]["width"] = "100px";
        columns[2]["width"] = "50px";
        columns[4]["width"] = "100px";
        columns[5]["width"] = "50px";
        console.log(columns);

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

        API.postDate("http://localhost:4000/api/product/bulk", listsCSV)
        alert("The lists are stored to DB");
    }

    return (
        <div className="shadow ml-5 mr-3 mb-4 p-5 bg-white rounded" style={{ width: "900px" }}>
            <Row className="mb-3">
                <h4>Upload your CSV File for Cymbals</h4>
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
                                <th>type</th>
                                <th>size</th>
                                <th>description</th>
                                <th>code</th>
                                <th>qty</th>
                                <th>ebay_price</th>
                                <th>website_price</th>
                                <th>packageCode</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Zildjian</td>
                                <td>Crash</td>
                                <td>17</td>
                                <td>K Custom hybrid </td>
                                <td>K1217</td>
                                <td>2</td>
                                <td>207</td>
                                <td>207</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
                                <td>...</td>
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
