import React, { useEffect, useState } from 'react'
import { RES_MENU_API_URL } from './constants'

function UseRestaurantMenu(resId) {
    const [resInfo, setResInfo] = useState(null)

    useEffect(() => {
        fetchRestaurantMenu()
    }, [])

    const fetchRestaurantMenu = async () => {
        const response = await fetch(RES_MENU_API_URL + resId)
        const json = await response.json()
        setResInfo(json.data)
    }
    return resInfo
}

export default UseRestaurantMenu
