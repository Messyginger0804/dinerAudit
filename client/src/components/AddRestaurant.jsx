import { useContext, useState } from "react"
import DinerFinder from "../api/DinerFinder";
import { RestaurantsContext } from "../context/RestaurantsConext";
import { useNavigate } from "react-router-dom";


function AddRestaurant() {
    const { addRestaurants } = useContext(RestaurantsContext)
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [price_range, setPrice_range] = useState('');

    // let navigate = useNavigate()


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await DinerFinder.post('/', {
                name: name,
                location: location,
                price_range: price_range,
            })

            // console.log(response)

            // console.log('this button is clicked')

            addRestaurants(response.data.data.restaurants)
            // navigate('/restaurants')
            // navigate('/')

        } catch (error) {
            console.error(error);
        }
    }

    return (
        // <main className=''>

        <form action='' className='m-4'>
            <div className='flex text-3xl justify-evenly pt-5'>
                <div className=''>
                    <input value={name} onChange={e => setName(e.target.value)} type='text' className='flex border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3' placeholder='name' />
                </div>
                <div className='col'>
                    <input value={location} onChange={e => setLocation(e.target.value)} type='text' className='flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5' placeholder='location' />
                </div>
                <div className=''>
                    <select placeholder="Rating" value={price_range} onChange={e => setPrice_range(e.target.value)} className='flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5'>
                        <option disabled>Price Range</option>
                        <option className="
                            text-xl" value='1'>$</option>
                        <option className="
                            text-xl" value='2'>$$</option>
                        <option className="
                            text-xl" value='3'>$$$</option>
                        <option className="
                            text-xl" value='4'>$$$$</option>
                        <option className="
                            text-xl" value='5'>$$$$$</option>
                    </select>
                </div>
                <button onClick={handleSubmit} type="submit" className="bg-purple-900 rounded text-yellow-600 p-2 hover:shadow-yellow-100 active:bg-gray-900">Add</button>
            </div>
        </form>
        // </main>
    )
}

export default AddRestaurant