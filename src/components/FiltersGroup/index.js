import './index.css'

const FiltersGroup = props => {
  const {categoryDetails, ratingDetails} = props
  const {getCategoryId, getRatingId} = props

  let idActive = false
  const onclickCategory = event => {
    getCategoryId(event.target.value)
    idActive = true
  }

  const onclickRating = event => {
    getRatingId(event.target.value)
  }

  const isActive = idActive === true ? 'active' : 'non-active'

  return (
    <div className="filters-group-container">
      <h1>Filters Group</h1>
      <ul className="categroy-container">
        {categoryDetails.map(item => (
          <li key={item.categoryId}>
            <label className={isActive} htmlFor={item.categoryId}>
              {item.name}
            </label>
            <input
              className="categoryinput"
              id={item.categoryId}
              type="button"
              value={item.categoryId}
              onClick={onclickCategory}
            />
          </li>
        ))}
      </ul>
      <ul className="rating-co">
        {ratingDetails.map(item => (
          <li key={item.ratingId}>
            <input
              className="categoryinput"
              id="ratingId"
              type="button"
              value={item.ratingId}
              onClick={onclickRating}
            />
            <label className="label-rating" htmlFor="ratingId">
              <img className="rating-image" src={item.imageUrl} alt="img" />
              <p className="non-active">& up</p>
            </label>
          </li>
        ))}
      </ul>
      <button className="clear-btn" type="button">
        Clear Filters
      </button>
    </div>
  )
}

export default FiltersGroup
