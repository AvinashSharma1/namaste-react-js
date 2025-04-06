import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/Header'
import Body from './components/Body'
import About from './components/About'
import Contact from './components/Contact'
import Error from './components/Error'
import RestaurantMenu from './components/RestaurantMenu'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import RestaurantMenu from './components/RestaurantMenu'

const AppLayout = () => {
    return (
        <div className="app">
            {console.log('App Layout is calling...')}
            <Header />
            <Outlet />
            {/* This is where the child components will be rendered */}
            {/* <Body /> */}
            {/* <About /> */}
            {/* <Contact /> */}
        </div>
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
                element: <About />,
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
