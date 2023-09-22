import React from 'react'
import { BsStarHalf, BsStarFill, BsStar } from 'react-icons/bs';



function StarRating({ rating }) {

    const stars = [];
    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<i><BsStarFill key={i} /></i>)
        } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
            stars.push(<i><BsStarHalf key={i} /></i>)
        }
        else {
            stars.push(<i><BsStar key={i} /></i>)
        }
    }

    return (
        <>{stars}</>
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