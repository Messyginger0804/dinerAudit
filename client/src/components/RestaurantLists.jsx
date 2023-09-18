import '../index.css'

function RestaurantLists() {
    return (
        <div className='flex justify-evenly'>
            <table className='border-2 content-center'>
                <thead className=''>
                    <tr className='flex place-content-end'>
                        <th scope='col' className=' border-2 p-5'>Review</th>
                        <th scope='col' className=' border-2 p-5'>Rating</th>
                        <th scope='col' className=' border-2 p-5'>edit</th>
                        <th scope='col' className=' border-2 p-5'>Location</th>
                        <th scope='col' className=' border-2 p-5'>delete</th>
                        <th scope='col' className=' border-2 p-5'>Restaurant</th>
                    </tr>
                </thead>
                <tbody className='flex justify-evenly'>
                    <tr>
                        <td className='border-2 p-5'>Mcdonalds</td>
                        <td className='border-2 p-5'>Mesquite</td>
                        <td className='border-2 p-5'>$$$$</td>
                        <td className='border-2 p-5'>rating</td>
                        <td className='border-2 p-5'><button>edit</button></td>
                        <td className='border-2 p-5'><button>delete</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default RestaurantLists