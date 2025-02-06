import React from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
    const categories = ["All", "Beef", "Breakfast", "Chicken", "Dessert", "Goat", "Lamb", "Miscellaneous", "Pasta", "Pork", "Seafood", "Side", "Starter", "Vegan", "Vegetarian"]


    return (
        <div className='navbar'>

            <ul>
                {
                    categories.map((category, index) => {
                        return <li key={index}> <NavLink to={category == "All" ? "/" : `/category/${category}`}>
                            {category}
                        </NavLink></li>
                    })
                }
            </ul>


        </div>
    )
}
