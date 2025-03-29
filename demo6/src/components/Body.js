import RestuarentCard from './RestuarentCard'
import resList from '../utils/mockData'

const Body = () => {
    return (
        <div className="body">
            <div className="search-container">
                <div className="search">Search</div>
            </div>

            <div className="res-container">
                {resList.cards.map((restaurant) => {
                    const resObj = restaurant.card.card
                    return (
                        <RestuarentCard key={resObj.info.id} resData={resObj} />
                    )
                })}
            </div>
        </div>
    )
}

export default Body
