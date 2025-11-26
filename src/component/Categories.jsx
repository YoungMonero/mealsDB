import React from 'react'

const Categories = ({categories: {strCategory, strCategoryThumb }}) => {
  return (
    <div className='cat-card'>
       <img src={strCategoryThumb} alt={strCategory}/>
        <h3>{strCategory}</h3>
    </div>
  )
}

export default Categories