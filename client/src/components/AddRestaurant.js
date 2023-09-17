import React from 'react'
import '../App.css'



function AddRestaurant() {
    return (
        <div>
            <form action='' className='flex'>
                <div className='form-row'>
                    <div className='col'>
                        <input type='text' className='form-control' placeholder='name' />
                    </div>
                    <div className='col'>
                        <input type='text' className='form-control' placeholder='location' />
                    </div>
                    <div className='col'>
                        <select className='custom-select'>
                            <option disabled>$</option>
                            <option value='1'>$</option>
                            <option value='2'>$$</option>
                            <option value='3'>$$$</option>
                            <option value='4'>$$$$</option>
                            <option value='5'>$$$$$</option>
                        </select>
                    </div>
                    <button type="button">Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddRestaurant