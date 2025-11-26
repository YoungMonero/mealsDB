import React, {useEffect, useState} from 'react'
import Header from '../component/Header'
import SearchInput from "../component/Search.jsx";
import Spinner from "../component/Spinner.jsx";
import Categories from "../component/Categories.jsx";

const Home = () => {

    const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1'
    const [mealList, setMealList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMassage, setErrorMassage] = useState('');

    const  fetchMeals = async () => {
        setIsLoading(true);
        setErrorMassage('')

        try {
            const endpoint = `${API_BASE_URL}/categories.php`;
            const response = await fetch(endpoint)


            if (!response.ok) {
                throw new Error('Error fetching categories.');
            }
            const data = await response.json();
            console.log(data);

            if (data.Response === 'false') {
                setErrorMassage(data.Error || 'fail to fetch categories.');
                setMealList([])
            }

            setMealList(data.categories);


        }catch (error) {
            console.log(`Error trying to fetch meals ${error}`);
            setErrorMassage('error trying to fetch meals please try again');
        }finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchMeals()
    }, []);

    return (
        <div>
            <Header/>
            <SearchInput/>
            <div className="container">
                <h2>See all Categories</h2>
                <div className="categories">
                    {
                        isLoading ? (<Spinner/>): errorMassage ?(<p className='err'></p>):
                            (
                                <ul className='list'>
                                    {mealList.slice(0, 12).map((categories) => (
                                       <Categories key={categories.id} categories={categories} />
                                    ))}
                                </ul>
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default Home