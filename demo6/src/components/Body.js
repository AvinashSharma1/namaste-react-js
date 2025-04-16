import RestaurantCard, { withOfferLabel } from './RestaurantCard'
import resList from '../utils/mockData'
import { useEffect, useState, useContext } from 'react'
import Shimmer from './Shimmer'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import UserContext from '../utils/userContext'

const Body = () => {
    // Local state variable to store the list of restaurants
    // useState is a hook that allows you to add React state to function components
    const [listOfRestaurants, setListOfRestaurants] = useState([])
    const [topBrandsListRestaurants, setTopBrandsListRestaurants] = useState([])
    const [filteredListOfRestaurants, setfilteredListOfRestaurants] = useState(
        []
    )
    const [searchText, setSearchText] = useState('')
    const { loggedInUser, setUserName } = useContext(UserContext)
    const RestaurantCardWithOffer = withOfferLabel(RestaurantCard)

    useEffect(() => {
        fetchData()
    }, [])

    const fetchData = async () => {
        const data = await fetch(
            'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.594566&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
        )

        if (!data.ok) {
            throw new Error(`HTTP error! status: ${data.status}`)
        }
        const json = await data.json()
        // opttional chaining to get the data from the json object
        const jsonData =
            json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        console.log(jsonData)
        console.log(json)
        setListOfRestaurants(jsonData)
        setfilteredListOfRestaurants(jsonData)

        // setTopBrandsListRestaurants
        const topBrandsList =
            json?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle
        setTopBrandsListRestaurants(topBrandsList)
        console.log(topBrandsList)
    }

    // Custom hook to check online status
    const onlineStatus = useOnlineStatus()
    if (!onlineStatus) {
        return (
            <div className="offline-container">
                <h1>Looks like you are offline</h1>
            </div>
        )
    }

    // Conditional rendering to show shimmer effect while data is being fetched
    // and to show the list of restaurants once data is fetched
    if (listOfRestaurants?.length === 0) {
        return <Shimmer />
    }

    return (
        <div className="body">
            <div className="search-container flex content-center justify-center m-2 p-2">
                <div className="search">
                    <input
                        type="text"
                        placeholder="Search for restaurants"
                        className="search-input h-11 w-96 px-4 mr-2 border border-solid border-gray-400 rounded-lg focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value)
                        }}
                    />
                    <button
                        className="search-btn px-4 h-11 bg-blue-500 blue-500 text-white rounded-lg border border-solid border-blue-500 "
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

                    <button
                        className="filter-btn mx-2 px-2 h-11 bg-gray-400 text-white rounded-md border border-solid border-gray-400"
                        onClick={() => {
                            let filteredList =
                                listOfRestaurants.restaurants.filter(
                                    (restaurant) =>
                                        restaurant.info.avgRating >= 4.4
                                )
                            let filteredRestaurantsList = {
                                restaurants: filteredList,
                            }
                            console.log(filteredRestaurantsList)
                            setfilteredListOfRestaurants(
                                filteredRestaurantsList
                            )
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                    <button
                        className="filter-btn mx-2 px-2 h-11 bg-gray-400 text-white rounded-md border border-solid border-gray-400"
                        onClick={() => {
                            let filteredList =
                                listOfRestaurants.restaurants.filter(
                                    (restaurant) =>
                                        restaurant.info.cuisines.includes(
                                            'North Indian'
                                        )
                                )
                            let filteredRestaurantsList = {
                                restaurants: filteredList,
                            }
                            console.log(filteredRestaurantsList)
                            setfilteredListOfRestaurants(
                                filteredRestaurantsList
                            )
                        }}
                    >
                        North Indian
                    </button>
                    <button
                        className="filter-btn mx-2 px-2 h-11 bg-gray-400 text-white rounded-md border border-solid border-gray-400"
                        onClick={() => {
                            console.log('clear button')
                            setfilteredListOfRestaurants(listOfRestaurants)
                        }}
                    >
                        Clear Filter
                    </button>
                    <div>
                        <label>Username:</label>
                        <input
                            value={loggedInUser}
                            className="m-2 px-2"
                            type="text"
                            onChange={(e) => {
                                setUserName(e.target.value)
                            }}
                        />
                    </div>
                </div>
            </div>

            <div className="flex justify-left m-8 px-4">
                <h2 className="text-2xl font-bold ">Restaurants to explore</h2>
            </div>

            <div className="res-container flex m-8 flex-wrap">
                {filteredListOfRestaurants?.restaurants?.length > 0 ? (
                    filteredListOfRestaurants?.restaurants?.map(
                        (restaurant) => {
                            const offerText = '125 off aboe 499'
                            console.log(
                                restaurant.info.aggregatedDiscountInfoV3
                            )
                            const { header, subHeader, discountTag } =
                                restaurant?.info?.aggregatedDiscountInfoV3 || {}
                            const discountText =
                                discountTag === 'FLAT DEAL'
                                    ? `${header || ''} ${
                                          subHeader || ''
                                      }`.trim()
                                    : null
                            console.log(discountText)
                            return (
                                <div
                                    key={restaurant.info.id}
                                    className="restaurant-card relative"
                                >
                                    <Link
                                        key={'link' + restaurant.info.id}
                                        to={`/restaurants/${restaurant.info.id}`}
                                    >
                                        {discountText ? (
                                            <RestaurantCardWithOffer
                                                resData={restaurant}
                                                offerText={discountText}
                                            />
                                        ) : (
                                            <RestaurantCard
                                                resData={restaurant}
                                            />
                                        )}
                                    </Link>
                                </div>
                            )
                        }
                    )
                ) : (
                    <h1>Oops no restaurants found !!</h1>
                )}
            </div>

            <div className="flex justify-left m-8 px-4">
                <h2 className="text-2xl font-bold ">
                    Top restaurant chains in Bangalore
                </h2>
            </div>

            <div className="top-brand-res-container flex m-8 flex-wrap">
                {topBrandsListRestaurants?.restaurants?.length > 0 ? (
                    topBrandsListRestaurants?.restaurants?.map((restaurant) => {
                        return (
                            <Link
                                key={'topbrand_' + restaurant.info.id}
                                to={`/restaurants/${restaurant.info.id}`}
                            >
                                <RestaurantCard resData={restaurant} />
                            </Link>
                        )
                    })
                ) : (
                    <h1>Oops no top brand restaurants found !!</h1>
                )}
            </div>
        </div>
    )
}

export default Body
