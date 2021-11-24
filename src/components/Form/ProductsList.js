import './index.css'

const ProductsList = ({ProductDetails, index}) => {
  const {name, Price, Category  } = ProductDetails

  return (
    <li type="1" className="table-row">
      <div className="table-cell serial-column">
        <p>{index+1}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell name-column">
        <p>{name}</p>
      </div>
      <hr className="separator" />
      <div className="table-cell Email-column">
        <p className="Email-no-value">{Price}</p>
      </div>
      <hr className="seperator" />
      <div className="table-cell name-column">
        <p>{Category}</p>
      </div>
      <hr className="separator" />
    </li>
  )
}

export default ProductsList