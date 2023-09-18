import React from 'react'
import { useEffect, useContext } from 'react';
import { RestaurantsContext } from '../context/RestaurantsConext';
import DinerFinder from '../api/DinerFinder';

function Review(props) {
    const { restaurants, setRestaurants } = useContext(RestaurantsContext);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await DinerFinder.get('/')
                setRestaurants(response.data.data.restaurants)
            } catch (error) {
                console.error(error)
            }

        }
        fetchData();
    }, [])
    return (
        <tr>
            <td>{restaurant.name}</td>
            <td>{restaurant.location}</td>
            <td>{"$".repeat(restaurant.price_range)}</td>
            <td>reviews</td>
            <td className='border-2 p-5'><button className='bg-blue-200 rounded p-2'>edit</button></td>
            <td className='border-2 p-5'><button className='bg-blue-200 rounded p-2'>delete</button></td>
        </tr>
    )
}

export default Review