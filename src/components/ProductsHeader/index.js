import {Component} from 'react'
import {BsFilterRight} from 'react-icons/bs'

import './index.css'

class ProductsHeader extends Component {
  state = {searchInput: ''}

  getSearchInput = () => {
    const {changeBySearchInput} = this.props
    const {searchInput} = this.state
    console.log(searchInput)
    changeBySearchInput(searchInput)
  }

  onChangeSortby = event => {
    const {changeSortby} = this.props
    changeSortby(event.target.value)
  }

  onsearchInput = event => {
    this.setState({searchInput: event.target.value})
    this.getSearchInput()
  }

  render() {
    const {sortbyOptions, activeOptionId} = this.props
    const {searchInput} = this.state

    return (
      <div className="products-header">
        <input type="text" value={searchInput} onChange={this.onsearchInput} />
        <h1 className="products-list-heading">All Products</h1>
        <div className="sort-by-container">
          <BsFilterRight className="sort-by-icon" />
          <p className="sort-by">Sort by</p>
          <select
            className="sort-by-select"
            value={activeOptionId}
            onChange={this.onChangeSortby}
          >
            {sortbyOptions.map(eachOption => (
              <option
                key={eachOption.optionId}
                value={eachOption.optionId}
                className="select-option"
              >
                {eachOption.displayText}
              </option>
            ))}
          </select>
        </div>
      </div>
    )
  }
}

export default ProductsHeader
