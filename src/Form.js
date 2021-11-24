import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import {Link} from 'react-router-dom'

const initialProductsList = [

]

class Form extends Component {
  state = {
    ProductsList: initialProductsList,
    name: '',
    Price: '',
    category: '',

  }

  onAddContact = event => {
    // event.preventDefault()
    const {name, Price, category} = this.state
    const newProduct = {
      id: uuidv4(),
      name,
      Price,
      category,
    }

    this.setState(prevState => ({
      contactsList: [...prevState.ProductsList, newProduct],
      name: '',
      Price: '',
      category: '',
    }))
  }

   onSubmit = e => {
    e.preventDefault()
    const {name, Price} = this.state
    const newProduct = {
      id: uuidv4(),
      name,
      Price,
    }

    this.setState(prevState => ({
      ProductsList: [...prevState.ProductsList, newProduct],
      name: '',
      Price: '',
    }))
  }

    submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      this.onSubmitSuccess()
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  onChangePrice = event => {
    this.setState({Price: event.target.value})
  }
  onChangeCategory = event => {
    this.setState({Category: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {name, Price, Category} = this.state
    return (
    <div className="container mt-10" >
        <form id="addUserForm"  onSubmit={this.submitForm}>
            <div className="mb-3">
                <input type="text" value={name}  onChange={this.onChangeName}
              className="input"
              placeholder="Enter Name" id="name" />
            </div>
            <div className="mb-3">
                <input type="number" onChange={this.onChangePrice}
              className="input"
              placeholder="Enter Price" value={Price}  id="Price" />
                <p id="emailErrMsg" class="error-message"></p>
            </div>
            <div className="mb-3">
                <label for="status" >Category:</label>
                <select id="status" onChangeCategory={this.onChangeCategory} value={Category} >
                    <option value="Active">Men's Clothing</option>
                    <option value="Active">Women's Clothing</option>
                    <option value="Inactive">Jwellery</option>
                    <option value="Inactive">Electronics</option>
                </select>
            </div>
            <Link className="route-link" to="/Table">
          <button className="btn btn-primary" onClick={e => this.onSubmit(e)}>Submit</button>
        </Link>
        </form>
    </div>
    )
  }
}

export default Form