import React, {useEffect, useState} from 'react'
import Header from '../component/Header'
import SearchInput from "../component/Search.jsx";
import Spinner from "../component/Spinner.jsx";
import Categories from "../component/Categories.jsx";
import {useDebounce} from "react-use";
import MealCard from "../component/Cart.jsx";
import { Link } from 'react-router';

const Home = () => {

    const API_BASE_URL = 'https://www.themealdb.com/api/json/v1/1'
    const [mealList, setMealList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [errorMassage, setErrorMassage] = useState(null);
    const [search, setSearch] = useState('');
    const [searchPage, setSearchPage] = useState('');
    const [debouncedSearch, setDebouncedSearch] = useState('');
    // const [searchError, setSearchError] = useState('');
    

    useDebounce(() =>setDebouncedSearch(search),500,[search])

    const  fetchMeals = async (s = '') => {
        setIsLoading(true);
        setErrorMassage('')

        try {
            const endpoint = s ?
                `${API_BASE_URL}/search.php?s=${encodeURIComponent(s)}`:
                `${API_BASE_URL}/categories.php`
            const response = await fetch(endpoint)


            if (!response.ok) {
                throw new Error('Error fetching categories.');
            }
            const data = await response.json();

            console.log(data);
           // if(data.categories){
                setMealList(data.categories);
           // }else if (data?.meals){
                 setSearchPage(data?.meals);
           // }else{
           //  setErrorMassage('meal not found')
           // }
           
            

           

           


        }catch (error) {
            console.log(`Error trying to fetch meals ${error}`);
            setErrorMassage('error trying to fetch meals please try again');
        }finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        fetchMeals(debouncedSearch)
    }, [debouncedSearch]);

    return (
        <div>
            <Header/>
            <SearchInput search={search} setSearch={setSearch}/>
            <div className="container">

                <div className="categories">
                    {
                        isLoading ? (<Spinner/>): errorMassage ?(<p className='err'>{errorMassage}</p>):

                            searchPage ? (
                                <div className="search-result">
                                    <h3>Search result for meals with "{search}"</h3>
                                    <ul className='list'>
                                        {
                                            searchPage.map((meals) => (
                                                <MealCard key={meals.id} meals={meals} />
                                            ))
                                        } 
                                    </ul>
                                </div>
                            ):
                            (
                                <div>
                                    <h2>See all Categories</h2>
                                    <ul className='list'>
                                        {mealList?.slice(0, 12).map((categories) => (
                                            <Link to={`/categories/${categories.strCategory}`}><Categories key={categories.id} categories={categories} /></Link>
                                        )) }
                                    </ul>
                                </div>
                            )
                    }
                </div>
            </div>
        </div>
    )
}

export default Home