import '../index.css'

function RestaurantLists() {
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
                    </tr>
                    <tr>
                        <td className='border-2 p-5'>Mcdonalds</td>
                        <td className='border-2 p-5'>Mesquite</td>
                        <td className='border-2 p-5'>$$$$</td>
                        <td className='border-2 p-5'>blah-blah-blah</td>
                        <td className='border-2 p-5'><button className='bg-blue-200 rounded p-2'>edit</button></td>
                        <td className='border-2 p-5'><button className='bg-blue-200 rounded p-2'>delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RestaurantLists