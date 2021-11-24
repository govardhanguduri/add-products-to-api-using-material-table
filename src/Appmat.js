import React, { useState, useEffect } from 'react';
import './App.css';
import MaterialTable from 'material-table'

function App() {

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
        setData(resp)
      })
  }, [])


  return (
    <div className="App">
      <h1 align="center">React-App</h1>
      <MaterialTable
        title="PRODUCTS LIST"
        data={data}
        columns={columns}
        editable={{
          onRowAdd: (newRow) => new Promise((resolve, reject) => {
            const updatedRows = [...data, { id: Math.floor(Math.random() * 100), ...newRow }]
            setTimeout(() => {
              setData(updatedRows)
              resolve()
            }, 2000)
          }),
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

export default App;