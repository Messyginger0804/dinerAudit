import React from 'react'
import { BsStarHalf, BsStarFill, BsStar } from 'react-icons/bs';



function StarRating({ rating }) {

    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<i><BsStarFill className='flex text-yellow-500 text-xl' key={i} /></i>)
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars.push(<i><BsStarHalf className='flex text-yellow-500 text-xl' key={i} /></i>)
        }
        else {
            stars.push(<i><BsStar className='flex text-yellow-500 text-xl' key={i} /></i>)
        }
    }
    // const bubble = 123;

    return (
        <span className='flex p-2'>{stars}</span>
    )
    // return (
    //     <div>
    //         {[...Array(5)].map((star) => {
    //             return (
    //                 <span key={star}><BsStar /></span>
    //             );
    //         })}
    //     </div>
    // )
}

export default StarRating