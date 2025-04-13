import { RES_CDN_URL } from '../utils/constants'
const RestaurantCard = (props) => {
    const { resData } = props
    const {
        name,
        cuisines,
        avgRating,
        cloudinaryImageId,
        locality,
        costForTwo,
        veg,
    } = props.resData?.info
    const deliveryTime = props.resData?.info?.sla?.slaString
    return (
        <div
            veg-attr={'value-' + veg}
            className="res-card w-[300px] h-[290px] m-2 p-2 rounded-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
        >
            <div className="image-container">
                <img
                    className="res-logo h-[150px] w-[100%] rounded-2xl"
                    src={RES_CDN_URL + cloudinaryImageId}
                    alt="Logo"
                />
                {/* 
                <div className={`circle ${veg ? 'veg' : 'non-veg'}`}></div>
                */}

                {veg !== undefined && veg !== null ? (
                    <div
                        className={`circle w-[15px] h-[15px] rounded-full absolute top-[10px] right-[15px] border-2 border-white ${
                            veg ? 'bg-green-500' : 'bg-red-950'
                        }`}
                    ></div>
                ) : null}
            </div>
            {/* Restaurant Details */}
            <div className="p-2 bg-white ">
                {/* Restaurant Name */}
                <h4 className="font-bold text-lg truncate" title={name}>
                    {name}
                </h4>

                {/* Rating and Delivery Time */}
                <div className="flex items-center mt-2">
                    {/* Rating */}
                    <div className="flex items-center text-green-800 mr-3">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                            className="w-5 h-5"
                        >
                            <path d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <span className="ml-1 text-sm font-medium">
                            {avgRating} stars
                        </span>
                    </div>

                    {/* Delivery Time */}
                    <span className="text-gray-500 text-sm">
                        {deliveryTime}
                    </span>
                    {/* Cost for Two */}
                    <span className="text-gray-500 ml-3 text-sm">
                        {costForTwo}
                    </span>
                </div>

                {/* Cuisines */}
                <h5
                    className="text-gray-600 text-sm mt-2 truncate"
                    title={cuisines.join(', ')}
                >
                    {cuisines.join(', ')}
                </h5>

                {/* Locality */}
                <h5
                    className="text-gray-500 text-sm mt-1 truncate"
                    title={locality}
                >
                    {locality}
                </h5>
            </div>
        </div>
    )
}

export const withOfferLabel = (RestaurantCard) => {
    return (props) => {
        const { offerText } = props

        return (
            <div>
                <div className="offer-ribbon absolute z-50 top-0 left-0 bg-red-500 text-white px-4 py-1 transform  origin-top-left shadow-md">
                    <span className="text-sm font-semibold">{offerText}</span>
                </div>
                <RestaurantCard {...props} />
            </div>
        )
    }
}

export default RestaurantCard
