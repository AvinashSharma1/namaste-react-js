import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
    const { title, itemCards } = data || {}
    const handleClick = () => {
        // setShowItems(!showItems)
        setShowIndex()
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
