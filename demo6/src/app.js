import React, { lazy, Suspense, useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import Contact from './components/Contact'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import RestaurantMenu from './components/RestaurantMenu'
import UserContext from './utils/userContext'

const About = lazy(() => import('./components/About'))
const Contact = lazy(() => import('./components/Contact'))
const Error = lazy(() => import('./components/Error'))
const RestaurantMenu = lazy(() => import('./components/RestaurantMenu'))

const AppLayout = () => {
    const [userName, setUserName] = useState()

    // authentication logic
    useEffect(() => {
        // Makee Api call
        const data = { name: 'Avinash Sharma' }
        setUserName(data.name)
    }, [])

    return (
        <UserContext.Provider value={{ loggedInUser: userName, setUserName }}>
            <div className="app">
                {console.log('App Layout is calling...')}
                <Header />
                <Outlet />
                {/* This is where the child components will be rendered */}
                {/* <Body /> */}
                {/* <About /> */}
                {/* <Contact /> */}
            </div>
        </UserContext.Provider>
    )
}
const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: (
                    <Suspense fallback={<h1>Loading...</h1>}>
                        <About />
                    </Suspense>
                ),
            },
            {
                path: '/contact',
                element: <Contact />,
            },
            {
                path: '/restaurants/:resId',
                element: <RestaurantMenu />,
                errorElement: <Error />,
            },
        ],
        errorElement: <Error />,
    },
])
const root = ReactDOM.createRoot(document.getElementById('root'))
//root.render(<AppLayout />)
root.render(<RouterProvider router={appRouter} />)
