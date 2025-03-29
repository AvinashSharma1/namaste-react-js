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
        <div className="res-card">
            <div className="image-container">
                <img
                    className="res-logo"
                    src={RES_CDN_URL + cloudinaryImageId}
                    alt="Logo"
                />
                <div className={`circle ${veg ? 'veg' : 'non-veg'}`}></div>
            </div>

            <h4>{name}</h4>
            <h5>{cuisines.join(', ')}</h5>
            <h5>{avgRating} stars</h5>
            <h5>{costForTwo}</h5>
            <h5>{deliveryTime} mins </h5>
            <h5>{locality}</h5>
        </div>
    )
}
export default RestuarentCard
