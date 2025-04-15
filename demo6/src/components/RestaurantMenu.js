import React from 'react'
import { useState, useEffect } from 'react'
import Shimmer from './Shimmer'
import { useParams } from 'react-router-dom'
import { RES_MENU_API_URL } from '../utils/constants'
import usesRestaurantMenu from '../utils/useRestaurantMenu'
import RestaurantCategory from './RestaurantCategory'

const RestaurantMenu = () => {
    const [showIndex, setShowIndex] = useState(null)
    const { resId } = useParams()

    console.log(resId)
    const resInfo = usesRestaurantMenu(resId)

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

    const categories =
        resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (c) => {
                return (
                    c.card?.['card']?.['@type'] ===
                    'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
                )
            }
        )
    console.log('category', categories)
    return (
        <div className="restaurant-menu text-center">
            <h1 className="font-bold text-2xl">{name}</h1>
            <p className="font-bold text-xl">{cuisines.join(', ')}</p>
            <p>{costForTwoMessage}</p>
            <p>{avgRating}</p>
            <p>{deliveryTime}</p>
            <p>{locality}</p>

            {/* Category accordion */}
            {categories?.map((category, index) => (
                <RestaurantCategory
                    key={
                        'category_card_' +
                        category?.card?.card?.title +
                        '_' +
                        category?.card?.card?.categoryId
                    }
                    data={category?.card?.card}
                    showItems={index === showIndex ? true : false}
                    setShowIndex={() => setShowIndex(index)}
                />
            ))}
        </div>
    )
}

export default RestaurantMenu
