import React from "react";
import tableData from "../Data"
const Table = () => {

    const tableHeader = (tableData) => {
        return (
            <tr>
                <td> id</td>
                <td> first_name</td>
                <td> last_name</td>
                <td> email</td>
                <td> gender</td>
                <td> ip_address</td>
            </tr>
        )
    }

    const data = (eachRow,index) => {
        return (
            <tr key={index}>
                <td> {eachRow.id}</td>
                <td> {eachRow.first_name}</td>
                <td> {eachRow.last_name}</td>
                <td> {eachRow.email}</td>
                <td> {eachRow.gender}</td>
                <td> {eachRow.ip_address}</td>
            </tr>
        );
    }
    const tableValue = (tableData) => {
        return tableData && tableData.map((eachRow, index) => {
            return data(eachRow, index);
        });
    }

    return (
        <>
            <table>
                <thead>
                    {tableHeader(tableData)}
                </thead>
                <tbody>
                    {tableValue(tableData)}
                </tbody>
            </table>
        </>
    );
}

export default Table;