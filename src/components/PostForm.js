import React, { useState } from 'react'
import axios from 'axios';

const PostForm = () => {
    const url="https://fakestoreapi.com/products/Create"
    const [data, setData] = useState({
        name: '',
        price:'',
        category:''
    })

    function submit(e) {
        e.preventDefault();
        axios.post(url, {
            name: data.name,
            price:parseInt(data.price),
            category: data.category
        })
        .then(res => {
            console.log(res.data)
        })
    }

    function handle(e) {
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    
    return (
        <div>
            <form id="addUserForm"  onSubmit={(e) => submit(e)}>
            <div className="mb-3">
                <input type="text" onChange={(e) => handle(e)} id="name" value={data.name} placeholder="Product Name" />
            </div>
            <div className="mb-3">
                <input type="number"  onChange={(e) => handle(e)} id="price" value={data.price} placeholder="Product Price" />
                <p id="emailErrMsg" class="error-message"></p>
            </div>
            <div className="mb-3">
                <label for="status"  onChange={(e) => handle(e)} id="category" value={data.category} >Category:</label>
                <select id="status">
                    <option value="Active">Men's Clothing</option>
                    <option value="Active">Women's Clothing</option>
                    <option value="Inactive">Jwellery</option>
                    <option value="Inactive">Electronics</option>
                </select>
            </div>
            <link to={"./Table"}>
                    <button className="btn btn-primary">Submit</button>
                </link>
          
        </form>
        </div>
    )
}

export default PostForm
