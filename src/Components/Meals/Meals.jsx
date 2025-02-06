import axios from 'axios'
import React, { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Meal from '../Meal/Meal'
import Navbar from '../Navbar/Navbar'

export default function Meals() {
    const [meals, setMeals] = useState([])
    const { category } = useParams()
    // console.log(category);


    useEffect(() => {
        getMeals(category)
    }, [category])


    function getMeals(category) {
        category ?

            axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`).then(({ data }) => {
                // console.log(data.meals);
                setMeals(data.meals)

            }) :


            axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=`).then(({ data }) => {
                // console.log(data.meals);
                setMeals(data.meals)

            })



    }
    return (
        <div className='meals'>
            <div className='container' >
                <h1 className='text-amber-100'>Learn, Cook, Eat Your Food</h1>
                <Navbar />
                <div className='meals-data'>
                    {
                        meals.map((meal, index) => {
                            return <Meal key={index} meal={meal} />
                        })
                    }
                </div>
            </div>
        </div>
    )
}
