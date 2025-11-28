import React from 'react'

const MealCard = ({meals: {strMeal, strMealThumb, dateModified, strCategory, strArea }}) => {
    return (
        <div className='card'>
            <img src={strMealThumb} alt={strMeal}/>
            <h3>{strMeal}</h3>
            <div className='card-ftr'>
                <p>{dateModified ? dateModified.split('-')[0] : 'N/A'}</p>
                <span>{strCategory}</span>
            </div>
            <span className='ctr'>{strArea}</span>
        </div>
    )
}

export default MealCard