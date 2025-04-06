import React from 'react'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import { RES_MENU_API_URL } from '../utils/constants'

const RestaurantMenu = () => {
    const [resInfo, setResInfo] = useState(null)
    const { resId } = useParams()
    console.log(resId)
    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(RES_MENU_API_URL + resId)
        const json = await data.json()
        setResInfo(json.data)
    }

    if (resInfo === null) return <Shimmer />

    const {
        name,
        cuisines,
        costForTwoMessage,
        avgRating,
        deliveryTime,
        cloudinaryImageId,
        locality,
    } = resInfo?.cards[2]?.card?.card.info || {}

    const { itemCards } =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
            ?.card || {}
    console.log(itemCards)
    return (
        <div className="restaurant-menu">
            <h1>{name}</h1>
            <p>{cuisines.join(', ')}</p>
            <p>{costForTwoMessage}</p>
            <p>{avgRating}</p>
            <p>{deliveryTime}</p>
            <p>{locality}</p>
            <h2>Menu Items</h2>
            <ul>
                {itemCards?.map((item) => {
                    return (
                        <li key={item.card.info.id}>
                            {item.card.info.name} - ₹
                            {item?.card?.info?.defaultPrice / 100 ||
                                item?.card?.info?.price / 100}
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}

export default RestaurantMenu
