import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

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
    const newContact = {
      id: uuidv4(),
      name,
      Price,
      category,
    }

    this.setState(prevState => ({
      contactsList: [...prevState.ProductsList, newContact],
      name: '',
      Price: '',
      category: '',
    }))
  }

   onSubmit = e => {
    const {history} = this.props
    history.replace('/Table')
  }

  onChangePrice = event => {
    this.setState({Email: event.target.value})
  }
  onChangeCategory = event => {
    this.setState({Email: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    const {name, Price, Category} = this.state
    return (
    <div className="container">
        <form id="addUserForm">
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
            <button className="btn btn-primary" onClick={e => this.onSubmit(e)}>Submit</button>
        </form>
    </div>
    )
  }
}

export default Form