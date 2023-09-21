import { useState, useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { RestaurantsContext } from '../context/RestaurantsConext';
import DinerFinder from '../api/DinerFinder';

function UpdateRestaurant(props) {
    const { id } = useParams();
    const { restaurants } = useContext(RestaurantsContext);
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [price_range, setPrice_range] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            const response = await DinerFinder.get(`/${id}`)
            // console.log(response);
            // console.log(response.data.data)
            setName(response.data.data.restaurants.name)
            setLocation(response.data.data.restaurants.location)
            setPrice_range(response.data.data.restaurants.price_range)
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
        console.log(updateRestaurant)
        console.log('Updated')
    }

    return (
        // <div className='flex-col gap-11 px-15 md:px-20'>
        <form className='flex-col gap-11 m-8 p-16 md:px-20' action="">
            <div className=''>
                <label className='m-4 text-xl' htmlFor="name">name</label>
                <input
                    className=' resize-none w-full py-2 px-4 border-2 border-blue-700 bg-gray-300'
                    value={name}
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
        // {/* </div> */ }
    )
}

export default UpdateRestaurant