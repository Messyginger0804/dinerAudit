import { useParams } from 'react-router-dom'
import '../index.css'
import { useContext, useEffect, useState } from 'react'
import { RestaurantsContext } from '../context/RestaurantsConext'
import DinerFinder from '../api/DinerFinder'
import StarRating from '../components/StarRating'
import Reviews from '../components/Reviews'
import AddReviews from '../components/AddReviews'


function DetailPage() {
    const { id } = useParams()
    const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await DinerFinder.get(`/${id}`)
                console.log(response)

                setSelectedRestaurant(response.data.data)
            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])


    return (
        <div className=''>{selectedRestaurant && (
            <>
                <div className='flex justify-center text-center'>
                    {/* <span>Average</span> */}
                    <StarRating
                        rating={selectedRestaurant.restaurant.average_rating}
                    />
                    <span className='ml-1'>
                        {selectedRestaurant.restaurant.count ? `(${selectedRestaurant.restaurant.count})` : "0"}
                    </span>
                </div>
                <div className=''>
                    <Reviews reviews={selectedRestaurant.reviews} />
                </div>
                <AddReviews />
            </>
        )}
        </div>
    )
}

export default DetailPage