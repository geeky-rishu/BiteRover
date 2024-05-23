import RestaurantCard from "./RestaurantCard"
import restaurantList from "../utils/mockData"
import { useState } from "react"

const Body = () => {

    const [resList , setresList] = useState(restaurantList)

    return (
        <div className="body">
            <div className="filter">
                <button 
                    className="filter-btn"
                    onClick={() => {
                        const filterList = resList.filter(
                            (res) => res.info.avgRating > 4.5
                        )
                        setresList(filterList)
                    }}

                >Top Rated Restaurants</button>
            </div>
                <div className="res-container">
                    {resList.map((restaurant) => (
                    <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))}
                </div>
        </div>
    )
}

export default Body