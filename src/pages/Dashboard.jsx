import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import Spinner from '../component/Spinner'
import MealCard from '../component/Cart'


const Dashboard = () => {

    const [errorMassage, setErrorMassage] = useState('')
    const [mealCategory, setMealCategory] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const meal = useParams()
    const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1'


    const  fetchMeals = async () => {
        setIsLoading(true);
        setErrorMassage('')

        try{
            const endpoint =`${API_BASE_URL}/filter.php?c=${meal.name}`
            const response = await fetch(endpoint)

            if(!response){
                throw new Error('Error fetching meals')
            }

            const data =await response.json()

            console.log(data)

            setMealCategory(data.meals)

        }catch (error) {
            console.log(`Error trying to fetch meals ${error}`);
            setErrorMassage('error trying to fetch meals please try again');
        }finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchMeals()
    },[])




  return (
    <div>
        {
            isLoading ? (<Spinner/>): errorMassage ? (<p>{errorMassage}</p>):
            (
              <div className='Categories'>
                <h1 className='cat-n'>Meals with Category name "{meal.name}"</h1>
                <ul className='list'>
                    {
                        mealCategory.slice(0,20).map((meals) => ( <MealCard key={meals.id} meals={meals} />))
                    }

                </ul>

              </div>
            )
        }

    </div>
  )
}

export default Dashboard
0