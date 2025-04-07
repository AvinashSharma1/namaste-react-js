import React from 'react'
import { useState } from 'react'

function User({ name }) {
    const [count, setCount] = useState(0)
    const [count2, setCount2] = useState(11)
    return (
        <div className="user-card">
            <h1>Count: {count}</h1>
            <h1>Coun2: {count2}</h1>
            <h2>Name: {name}</h2>
            <h3>Location:Bangalore</h3>
        </div>
    )
}

export default User
