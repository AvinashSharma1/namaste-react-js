import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = (props) => {
    const { data } = props
    const [showItems, setShowItems] = useState(false)
    const { title, itemCards } = data || {}
    const handleClick = () => {
        setShowItems(!showItems)
    }

    return (
        <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg rounded-lg p-4 ">
            <div
                className="flex justify-between items-center cursor-pointer"
                onClick={handleClick}
            >
                <span className="font-semibold text-base text-gray-700">
                    {title} ({itemCards.length})
                </span>
                <span>^</span>
            </div>
            {showItems && <ItemList items={itemCards} />}
        </div>
    )
}

export default RestaurantCategory
