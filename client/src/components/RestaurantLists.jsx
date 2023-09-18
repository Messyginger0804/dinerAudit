import '../index.css'
import { useContext, useEffect } from 'react'
import DinerFinder from '../api/DinerFinder';
import { RestaurantsContext } from '../context/RestaurantsConext';
// import axios from 'axios';

function RestaurantLists(props) {
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

    // useEffect(async () => {
    //     try {
    //         const response = await DinerFinder.get('/')
    //         console.log(response)
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }, []);

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
                    {restaurants?.map((restaurant) => {
                        return (

                            <tr key={restaurant.id}>
                                <td>{restaurant.name}</td>
                                <td>{restaurant.location}</td>
                                <td>{"*".repeat(restaurant.price_range)}</td>
                                <td>reviews</td>
                                <td className='border-2 p-5'><button className='bg-blue-200 rounded p-2'>edit</button></td>
                                <td className='border-2 p-5'><button className='bg-blue-200 rounded p-2'>delete</button></td>
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