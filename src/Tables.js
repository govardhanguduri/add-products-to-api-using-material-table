import React, { useState, useEffect } from 'react';
import MaterialTable from 'material-table'
import { VscDiffAdded } from 'react-icons/vsc'
import { Link } from 'react-router-dom';

const  Table = () => {

  const [data, setData] = useState()
  const columns = [
    { title: "ID", field: "id", editable: false },
    { title: "Name", field: "title" },
    { title: "Price($)", field: "price" },
    { title: "Category", field: 'category', },
  ]

    useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(resp => resp.json())
      .then(resp => {
        setTimeout(() => {
              setData(resp)
            }, 2000)
      })
  }, [])

  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <Link to={"/Form"}>
         <p align="end">Add Newdata  <VscDiffAdded/> </p> 
      </Link>
      <MaterialTable
        title="PRODUCTS LIST"
        data={data}
        columns={columns}
        editable={{
          onRowDelete: selectedRow => new Promise((resolve, reject) => {
            const index = selectedRow.tableData.id;
            const updatedRows = [...data]
            updatedRows.splice(index, 1)
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
          onRowUpdate:(updatedRow,oldRow)=>new Promise((resolve,reject)=>{
            const index=oldRow.tableData.id;
            const updatedRows=[...data]
            updatedRows[index]=updatedRow
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 1000)
          })

        }}
        options={{
          actionsColumnIndex: -1, addRowPosition: "first"
        }}
      />
    </div>
  );
}

export default Table;