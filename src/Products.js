import React,{useEffect, useState} from 'react'
//import Products from './Products';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [data,setData] = useState([]);
  const [search, setSearch] = useState('');
  useEffect(() => {
    fetch('https://fakestoreapi.com/products').then(
      response => response.json()
    ).then(jsondata => setData(jsondata))
  },[search])
  const onSubmit = e =>{
    e.preventDefault();
    setSearch(search);
  }
  return (
    <div>
      <center>
        <h4>Shopping</h4>
        <form onSubmit={onSubmit}>
          <input type="text"  value={search} onChange={(e) => setSearch(e.target.value)}/>
          
        </form>
        <div>
            <div className="row">
                {data.filter(item => item.title.toLowerCase().includes(search.toLowerCase())).map(item =>  
                <div className="col-md-4">
                    <div class="card" style={{"width": "14rem"}}>
                    <p className="card-id">{item.id}</p>
                    <img class="card-img-top" src={item.image} alt="product" />
                    <p className="card-price">Price: {item.price}</p>
                    <p className="card-price">Category: {item.category}</p>
                    <div class="card-body">
                        <center>
                            <h5 class="card-title">{item.title}</h5>
                            <p class="card-text">Rating : {item.rate}</p>
                        </center>
                    </div>
                </div>
            </div>
                )}
            </div>
        </div>
             {/*{data.length>=1 ? <Products  data={data}/>:null}*/}
      </center>
    </div>
  )
}

export default App