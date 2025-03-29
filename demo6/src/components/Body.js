import RestuarentCard from './RestuarentCard'
import resList from '../utils/mockData'
import { useState } from 'react'

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState(resList)
    return (
        <div className="body">
            <div className="search-container">
                <div className="search">Search</div>
            </div>

            <div className="filter-container">
                <button
                    className="filter-btn"
                    onClick={() => {
                        let filteredList = listOfRestaurants.cards.filter(
                            (restaurant) =>
                                restaurant.card.card.info.avgRating > 4.4
                        )
                        let filteredRestaurantsList = { cards: filteredList }
                        console.log(filteredRestaurantsList)
                        setListOfRestaurants(filteredRestaurantsList)
                    }}
                >
                    Top Rated Restaurants
                </button>
                <button
                    className="filter-btn"
                    onClick={() => {
                        console.log('clear button')
                        setListOfRestaurants(resList)
                    }}
                >
                    Clear Filter
                </button>

                <button
                    className="filter-btn"
                    onClick={() => {
                        let filteredList = listOfRestaurants.cards.filter(
                            (restaurant) =>
                                restaurant.card.card.info.cuisines.includes(
                                    'North Indian'
                                )
                        )
                        let filteredRestaurantsList = { cards: filteredList }
                        console.log(filteredRestaurantsList)
                        setListOfRestaurants(filteredRestaurantsList)
                    }}
                >
                    North Indian
                </button>
                <div className="filter">South Indian</div>

                <div className="filter">Fast Food</div>

                <div className="filter">Chinese</div>
                <div className="filter">Desserts</div>
                <div className="filter">Beverages</div>
                <div className="filter">Street Food</div>
                <div className="filter">Healthy Food</div>
                <div className="filter">Salads</div>
                <div className="filter">Snacks</div>
                <div className="filter">Bakery</div>
            </div>

            <div className="res-container">
                {listOfRestaurants.cards.map((restaurant) => {
                    const resObj = restaurant.card.card
                    return (
                        <RestuarentCard key={resObj.info.id} resData={resObj} />
                    )
                })}
            </div>
        </div>
    )
}

export default Body
