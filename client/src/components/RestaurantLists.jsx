import '../index.css'
import { useContext, useEffect } from 'react'
import DinerFinder from '../api/DinerFinder';
import { RestaurantsContext } from '../context/RestaurantsConext';
import { useNavigate } from "react-router-dom";
// import axios from 'axios';

function RestaurantLists(props) {
    const { restaurants, setRestaurants } = useContext(RestaurantsContext);

    const navigate = useNavigate();

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

    const handleDelete = async (e, id) => {
        e.stopPropagation()
        try {
            const response = await DinerFinder.delete(`/${id}`)
            // console.log(response)
            setRestaurants(restaurants.filter(restaurant => {
                return restaurant.id !== id
            }))
        } catch (error) {
            console.log(error)
        }
    }

    const handleEdit = (e, id) => {
        e.stopPropagation()
        navigate(`/restaurants/${id}/edit`)
        console.log('edit here')
    }

    const handleRestaurantSelect = (id) => {
        navigate(`/restaurants/${id}/`)
    }


    return (
        <div className='flex flex-col-6 justify-evenly w-full'>
            <table className='border-2 content-center w-full'>
                <thead className=''>
                    <tr className=''>
                        <th scope='col' className=' border-2 p-5'>Restaurant</th>
                        <th scope='col' className=' border-2 p-5'>location</th>
                        <th scope='col' className=' border-2 p-5'>rating</th>
                        <th scope='col' className=' border-2 p-5'>review</th>
                        <th scope='col' className=' border-2 p-5'>edit</th>
                        <th scope='col' className=' border-2 p-5'>delte</th>
                    </tr>
                </thead>
                <tbody className='text-center'>
                    {restaurants && restaurants.map((restaurant) => {
                        return (

                            <tr onClick={() => handleRestaurantSelect(restaurant.id)}
                                key={restaurant.id}>
                                <td>{restaurant.name}</td>
                                <td>{restaurant.location}</td>
                                <td>{"*".repeat(restaurant.price_range)}</td>
                                <td>reviews</td>
                                <td onClick={(e) => handleEdit(e, restaurant.id)} className='border-2 p-5'><button className='bg-blue-200 rounded p-2'>edit</button></td>
                                <td onClick={(e) => handleDelete(e, restaurant.id)} className='border-2 p-5'><button className='bg-blue-200 rounded p-2'>delete</button></td>
                            </tr>
                        )
                    })}
                    {/* <tr>
                        <td className='border-2 p-5'>Mcdonalds</td>
                        <td className='border-2 p-5'>Mesquite</td>
                        <td className='border-2 p-5'>$$$$</td>
                        <td className='border-2 p-5'>blah-blah-blah</td>
                        <td className='border-2 p-5'><button className='bg-blue-200 rounded p-2'>edit</button></td>
                        <td className='border-2 p-5'><button className='bg-blue-200 rounded p-2'>delete</button></td>
                    </tr>
                    <tr>
                        <td className='border-2 p-5'>Mcdonalds</td>
                        <td className='border-2 p-5'>Mesquite</td>
                        <td className='border-2 p-5'>$$$$</td>
                        <td className='border-2 p-5'>blah-blah-blah</td>
                        <td className='border-2 p-5'><button className='bg-blue-200 rounded p-2'>edit</button></td>
                        <td className='border-2 p-5'><button className='bg-blue-200 rounded p-2'>delete</button></td>
                    </tr>
                    <tr>
                        <td className='border-2 p-5'>Mcdonalds</td>
                        <td className='border-2 p-5'>Mesquite</td>
                        <td className='border-2 p-5'>$$$$</td>
                        <td className='border-2 p-5'>blah-blah-blah</td>
                        <td className='border-2 p-5'><button className='bg-blue-200 rounded p-2'>edit</button></td>
                        <td className='border-2 p-5'><button className='bg-blue-200 rounded p-2'>delete</button></td>
                    </tr> */}
                </tbody>
            </table>
        </div>
    )
}

export default RestaurantLists