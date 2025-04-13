import { RES_CDN_URL } from '../utils/constants'
const RestuarentCard = (props) => {
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
    const { deliveryTime } = props.resData?.info.sla
    return (
        <div
            veg-attr={'value-' + veg}
            className="res-card w-[300px] h-[420px] m-2 p-2 rounded-lg hover:shadow-2xl transform transition-transform duration-300 hover:scale-105"
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

            <h4 className="font-bold py-4 text-xl">{name}</h4>
            <h5>{cuisines.join(', ')}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo}</h5>
            <h5>{deliveryTime} mins </h5>
            <h5>{locality}</h5>
        </div>
    )
}
export default RestuarentCard
