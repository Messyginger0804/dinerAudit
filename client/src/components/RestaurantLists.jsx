import '../index.css'
import { useContext, useEffect } from 'react'
import DinerFinder from '../api/DinerFinder';
import { RestaurantsContext } from '../context/RestaurantsConext';
import { useNavigate } from "react-router-dom";
import StarRating from './StarRating';
// import axios from 'axios';

function RestaurantLists(props) {
    const { restaurants, setRestaurants } = useContext(RestaurantsContext);

    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await DinerFinder.get('/')
                // console.log(response.data.data)
                setRestaurants(response.data.data.restaurants)
            } catch (error) {
                console.error(error)
            }

        }
        fetchData();
    }, [])

    // const handleDelete = async (e, id) => {
    //     e.stopPropagation()
    //     try {
    //         const response = await DinerFinder.delete(`/${id}`)
    //         // console.log(response)
    //         setRestaurants(restaurants.filter(restaurant => {
    //             return restaurant.id !== id
    //         }))
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }

    const handleEdit = (e, id) => {
        e.stopPropagation()
        navigate(`/restaurants/${id}/edit`)
        // console.log('edit here')
    }

    const handleRestaurantSelect = (id) => {
        navigate(`/restaurants/${id}/`)
    }

    const showRating = (restaurant) => {
        if (!restaurant.count) {
            return (
                <span className='text-yellow-500'>0 reviews</span>
            )
        }
        return (
            <>
                <StarRating className='p-2' rating={restaurant.id} />
                <span className='p-2'>({restaurant.count}) reviews</span>
            </>)
    }


    return (
        <div className='flex flex-col-6 justify-evenly w-full'>
            <table className='bg-purple-900 border-2 shadow-lg content-center w-full shadow-violet-600'>
                <thead className=''>
                    <tr className=''>
                        <th scope='col' className='border-blue-200 border-2 p-5'>Restaurant</th>
                        <th scope='col' className='border-blue-200 border-2 p-5'>location</th>
                        <th scope='col' className='border-blue-200 border-2 p-5'>price range</th>
                        <th scope='col' className='border-blue-200 border-2 p-5'>review</th>
                        <th scope='col' className='border-blue-200 border-2 p-5'>edit/edit</th>
                        {/* <th scope='col' className=' border-2 p-5'>delte</th> */}
                    </tr>
                </thead>
                <tbody className='text-center border-blue-200'>
                    {restaurants && restaurants.map((restaurant) => {
                        return (

                            <tr className=' border-blue-200 p-2'
                                onClick={() => handleRestaurantSelect(restaurant.id)}
                                key={restaurant.id}>
                                <td className=' p-2'>{restaurant.name}</td>
                                <td className=' p-2'>{restaurant.location}</td>
                                <td className=' p-2'>{"$".repeat(restaurant.price_range)}</td>
                                <td className=' p-2 flex justify-center text-center'>{showRating(restaurant)}</td>
                                {/* <td onClick={(e) => handleEdit(e, restaurant.id)} className='border-2 p-5'>
                                    <button className='bg-blue-200 rounded p-2'>edit</button>
                                    <button className='bg-blue-200 rounded p-2'>delete</button>
                                </td> */}
                                <td onClick={(e) => handleEdit(e, restaurant.id)} className='border-4 p-2'><button className='bg-blue-200 rounded p-2'>edit/delete</button></td>
                                {/* <td onClick={(e) => handleDelete(e, restaurant.id)} className='border-2 p-5'><button className='bg-blue-200 rounded p-2'>delete</button></td> */}
                            </tr>
                        )
                    })}

                </tbody>
            </table>
        </div>
    )
}

export default RestaurantLists