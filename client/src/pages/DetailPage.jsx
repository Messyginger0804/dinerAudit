import { useParams } from 'react-router-dom'
import '../index.css'
import { useContext, useEffect, useState } from 'react'
import { RestaurantsContext } from '../context/RestaurantsConext'
import DinerFinder from '../api/DinerFinder'
import StarRating from '../components/StarRating'


function DetailPage() {
    const { id } = useParams()
    const { selectedRestaurant, setSelectedRestaurant } = useContext(RestaurantsContext)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await DinerFinder.get(`/${id}`)
                // console.log(response)

                setSelectedRestaurant(response.data.data.restaurants)

            } catch (error) {
                console.error(error)
            }
        }
        fetchData()
    }, [])


    return (
        <div>{selectedRestaurant && <StarRating rating={1.1} />}</div>
    )
}

export default DetailPage