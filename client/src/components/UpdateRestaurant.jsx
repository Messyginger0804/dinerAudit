import { useState, useContext, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsConext';
import DinerFinder from '../api/DinerFinder';


function UpdateRestaurant(props) {
    const { id } = useParams();
    const { restaurants, setRestaurants } = useContext(RestaurantsContext);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [price_range, setPrice_range] = useState('');
    let navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            const response = await DinerFinder.get(`/${id}`)
            // console.log(response);
            // console.log(response.data.data)
            setName(response.data.data.restaurant.name)
            setLocation(response.data.data.restaurant.location)
            setPrice_range(response.data.data.restaurant.price_range)
        }
        fetchData();
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        const updateRestaurant = await DinerFinder.put(`/${id}`, {
            name,
            location,
            price_range
        })
        navigate('/')
        // console.log(updateRestaurant)
        // console.log('Updated')
    }

    const handleDelete = async (e, id) => {
        e.preventDefault()
        e.stopPropagation()
        try {
            const response = await DinerFinder.delete(`/${id}`)
            console.log(response)
            setRestaurants(restaurants.filter(restaurant => {
                return restaurant.id !== id
            }))
            navigate('/')

        } catch (error) {
            console.log(error)
        }
    }

    return (
        // <div>
        <form className='flex-col gap-11 p-16 md:px-20' action="">
            <div className='flex justify-center'>
                <button className='rounded bg-red-600 mt-6 p-4 w-full active:bg-red-950 active:border-white'
                    onClick={(e) => handleDelete(e, id)}
                >DELETE THIS ENTRY</button>
            </div>
            <div className=''>
                <label className='m-4 text-xl'
                    htmlFor="name">name</label>
                <input
                    className=' resize-none w-full py-2 px-4 border-2 border-blue-700 bg-gray-300'
                    value={name}
                    // placeholder={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name"
                    type='text' />
            </div>
            <div className=''>
                <label className='m-4 text-xl' htmlFor="location">location</label>
                <input
                    className=' resize-none w-full py-2 px-4 border-2 border-blue-700 bg-gray-300'
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    id="location"
                    type='text' />
            </div>
            <div className=''>
                <label className='m-4 text-xl' htmlFor="price_range">rating</label>
                <input
                    className='resize-none w-full py-2 px-4 border-2 border-blue-700 bg-gray-300'
                    value={price_range}
                    onChange={(e) => setPrice_range(e.target.value)}
                    id="price_range"
                    type='number'>

                </input>
            </div>
            <button
                type='submit'
                onClick={handleSubmit}
                className="float-right bg-purple-600 rounded p-2 hover:shadow-yellow-100 m-2 content">
                update</button>
        </form>
        // </div>
    )
}

export default UpdateRestaurant