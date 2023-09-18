
function AddRestaurant() {
    return (
        <div className=''>

            <form action='' className=''>
                <div className='flex text-3xl justify-evenly pt-5'>
                    <div className=''>
                        <input type='text' className='flex border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3' placeholder='name' />
                    </div>
                    <div className='col'>
                        <input type='text' className='flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5' placeholder='location' />
                    </div>
                    <div className=''>
                        <select className='flex-grow border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5'>
                            <option disabled>$</option>
                            <option value='1'>$</option>
                            <option value='2'>$$</option>
                            <option value='3'>$$$</option>
                            <option value='4'>$$$$</option>
                            <option value='5'>$$$$$</option>
                        </select>
                    </div>
                    <button type="button" className="bg-purple-600 rounded p-2 hover:shadow-yellow-100">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddRestaurant