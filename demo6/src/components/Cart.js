import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../utils/cartSlice'
import ItemList from './ItemList'

const Cart = () => {
    // Subscribing to the store using a Selector
    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch()
    const handleClearCart = () => {
        //console.log('Clear Cart')
        dispatch(clearCart())
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-3xl font-bold">Cart</h1>
            <div className="w-6/2 m-auto">
                <h2 className="text-2xl font-bold">Items in Cart</h2>
                <h3 className="text-lg font-semibold">
                    {cartItems.length} items
                    <button
                        className="p-2 m-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                        onClick={handleClearCart}
                    >
                        Clear Cart
                    </button>
                </h3>
                <ItemList type="cart" items={cartItems} />
            </div>
        </div>
    )
}

export default Cart
