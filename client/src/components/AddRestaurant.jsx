import { useContext, useState } from "react"
import DinerFinder from "../api/DinerFinder";
import { RestaurantsContext } from "../context/RestaurantsConext";


function AddRestaurant() {
    const { addRestaurants } = useContext(RestaurantsContext)
    const [name, setName] = useState('');
    const [location, setLocation] = useState('');
    const [price_range, setPrice_range] = useState('');


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await DinerFinder.post('/', {
                name: name,
                location: location,
                price_range: price_range,
            })

            console.log(response)

            console.log('this button is clicked')

            addRestaurants(response.data.data.restaurants)

        } catch (error) {
            console.error(error);
        }
    }

    return (
        <main className=''>

            <form action='' className=''>
                <div className='flex text-3xl justify-evenly pt-5'>
                    <div className=''>
                        <input value={name} onChange={e => setName(e.target.value)} type='text' className='flex border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3' placeholder='name' />
                    </div>
                    <div className='col'>
                        <input value={location} onChange={e => setLocation(e.target.value)} type='text' className='flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5' placeholder='location' />
                    </div>
                    <div className=''>
                        <select placeholder="Rating" value={price_range} onChange={e => setPrice_range(e.target.value)} className='flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5'>
                            <option disabled>$</option>
                            <option value='1'>$</option>
                            <option value='2'>$$</option>
                            <option value='3'>$$$</option>
                            <option value='4'>$$$$</option>
                            <option value='5'>$$$$$</option>
                        </select>
                    </div>
                    <button onClick={handleSubmit} type="submit" className="bg-purple-600 rounded p-2 hover:shadow-yellow-100">Add</button>
                </div>
            </form>
        </main>
    )
}

export default AddRestaurant