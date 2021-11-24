import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate} from 'react-router-dom';
import {CONSTANTS} from '../../constants';
import './index.css'

const Form = () => {
    const navigate = useNavigate();
    const [data, setData] = useState({
        name: '',
        price:'',
        category:''
    })

    function submit(e) {
        e.preventDefault();
        axios.post(`${CONSTANTS.baseUrl}${CONSTANTS.endPoints.products}`, {
            name: data.name,
            price:parseInt(data.price),
            category: data.category
        })
        .then(res => {
            console.log(res.data);
            navigate('/');
        }).catch(e => {
            console.log('error', e);
        })
    }

    function handle(e) {
        const newdata={...data}
        newdata[e.target.id] = e.target.value
        setData(newdata)
        console.log(newdata)
    }

    
    return (
        <div className="registration-form-container">
            <h1 className="form-title">Shopping</h1>
          <center>
            <div className="view-container">
            <form id="addUserForm"  onSubmit={(e) => submit(e)}>
            <div className="mb-3">
                <input type="text" onChange={(e) => handle(e)} id="name" value={data.name} placeholder="Product Name" />
            </div>
            <div className="mb-3">
                <input type="number"  onChange={(e) => handle(e)} id="price" value={data.price} placeholder="Product Price" />
            </div>
            <div className="mb-3">
                <label htmlFor="status"  onChange={(e) => handle(e)} id="category" value={data.category} >Category:</label>
                <select id="status">
                    <option value="Active">Men's Clothing</option>
                    <option value="Active">Women's Clothing</option>
                    <option value="Inactive">Jwellery</option>
                    <option value="Inactive">Electronics</option>
                </select>
            </div>
                      {/* <Link to={"/"}> */}
                    <button className="btn btn-primary">Submit</button>
                {/* </Link> */}
        </form>
        </div>
        </center>
        </div>
    )
}

export default Form
