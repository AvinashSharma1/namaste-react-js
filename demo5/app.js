import React from 'react'
import ReactDOM from 'react-dom/client'

// React Element
const titleElement = (
    <h1 id="heading" tabIndex="6">
        Hello, Namaste React!, Title Element
    </h1>
)

// React functional component

const TittleComponent = () => <h1 id="Title"> Namaste React Title !!</h1>

const HeadingComponent = () => {
    return <h1 className="heading">Namaste React Functional Commponent</h1>
}

const data = alert('Hello, Namaste React!')
// Component Composition
const HeadingComponent2 = () => (
    <div>
        {data}
        {titleElement}
        <TittleComponent />
        <h1 className="heading">Namaste React Functional Commponent</h1>
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<HeadingComponent2 />)
