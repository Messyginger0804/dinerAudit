import React from 'react'
import StarRating from './StarRating'

function Reviews() {
    return (
        <div className='flex flex-wrap justify-center mb-2 container '>
            <div className='text-gray-400 bg-blue-600 mb-3 mr-4 h-40 w-96 p-4 overflow-y-scroll'>
                <div className='flex justify-between p-2'>
                    <span className='text-xl font-semibold'>Granny</span>
                    <span><StarRating rating={3.1} /></span>
                </div>
                <div className='p-2 scroll-m-5 italic'>
                    <p>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis necessitatibus similique dolore soluta aspernatur, minima quo cupiditate officiis, sapiente error ab atque accusamus totam! Officiis tempora nam voluptatum exercitationem veniam!"</p>
                </div>
            </div>

        </div>


    )
}

export default Reviews