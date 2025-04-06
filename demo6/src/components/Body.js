import RestuarentCard from './RestuarentCard'
import resList from '../utils/mockData'
import { useEffect, useState } from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'

const Body = () => {
    // Local state variable to store the list of restaurants
    // useState is a hook that allows you to add React state to function components
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [filteredListOfRestaurants, setfilteredListOfRestaurants] = useState(
        []
    )
    const [searchText, setSearchText] = useState('')

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.594566&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        )
        const json = await data.json()
        // opttional chaining to get the data from the json object
        const jsonData =
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        console.log(jsonData)
        console.log(json)
        setListOfRestaurants(jsonData)
        setfilteredListOfRestaurants(jsonData)
    }

    // Conditional rendering to show shimmer effect while data is being fetched
    // and to show the list of restaurants once data is fetched
    if (listOfRestaurants?.length === 0) {
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="search-container"></div>

            <div className="filter-container">
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search for restaurants"
                        className="search-input"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                    />
                    <button
                        className="search-btn"
                        onClick={() => {
                            let lowerCaseSearchText = searchText.toLowerCase()
                            let filteredList =
                                listOfRestaurants.restaurants.filter((res) => {
                                    let restaurantName =
                                        res?.info?.name?.toLowerCase()
                                    return (
                                        restaurantName.includes(
                                            lowerCaseSearchText
                                        ) ||
                                        res?.info?.cuisines?.some((cuisine) =>
                                            cuisine
                                                .toLowerCase()
                                                .includes(lowerCaseSearchText)
                                        )
                                    )
                                })
                            setfilteredListOfRestaurants({
                                restaurants: filteredList,
                            })
                            console.log(lowerCaseSearchText)
                            console.log(filteredList)
                        }}
                    >
                        Search
                    </button>
                </div>
                <button
                    className="filter-btn"
                    onClick={() => {
                        let filteredList = listOfRestaurants.restaurants.filter(
                            (restaurant) => restaurant.info.avgRating >= 4.4
                        )
                        let filteredRestaurantsList = {
                            restaurants: filteredList,
                        }
                        console.log(filteredRestaurantsList)
                        setfilteredListOfRestaurants(filteredRestaurantsList)
                    }}
                >
                    Top Rated Restaurants
                </button>

                <button
                    className="filter-btn"
                    onClick={() => {
                        let filteredList = listOfRestaurants.restaurants.filter(
                            (restaurant) =>
                                restaurant.info.cuisines.includes(
                                    'North Indian'
                                )
                        )
                        let filteredRestaurantsList = {
                            restaurants: filteredList,
                        }
                        console.log(filteredRestaurantsList)
                        setfilteredListOfRestaurants(filteredRestaurantsList)
                    }}
                >
                    North Indian
                </button>
                <button
                    className="filter-btn"
                    onClick={() => {
                        console.log('clear button')
                        setfilteredListOfRestaurants(listOfRestaurants)
                    }}
                >
                    Clear Filter
                </button>
            </div>

            <div className="res-container">
                {filteredListOfRestaurants?.restaurants?.length > 0 ? (
                    filteredListOfRestaurants?.restaurants?.map(
                        (restaurant) => {
                            return (
                                <Link
                                    key={restaurant.info.id}
                                    to={`/restaurants/${restaurant.info.id}`}
                                >
                                    <RestuarentCard resData={restaurant} />
                                </Link>
                            )
                        }
                    )
                ) : (
                    <h1>Oops no restaurants found !!</h1>
                )}
            </div>
        </div>
    )
}

export default Body
