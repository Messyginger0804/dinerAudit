import e from 'cors';
import { useState } from 'react'
import useLocation from 'react-router-dom'

function AddReviews() {
    const location = useLocation()
    console(location)
    const [name, setName] = useState();
    const [reviewText, setReviewText] = useState();
    const [rating, setRating] = useState();

    const handleSubmitReview = (e) => {
        e.prevent.default()

    }

    return (
        <div className='m-4'>
            <form action=''>
                <div className=''>
                    <div className='flex w-full'>
                        <div className='m-4'>
                            <label htmlFor="name">Name</label>
                            <input className='w-full'
                                onChange={(e) => setName(e.target.value)}
                                id='name'
                                value={name}
                                placeholder='name'
                                type="text" />
                        </div>
                        <div className='m-4'>
                            <label htmlFor="rating">Rating</label>
                            <select className='w-full'
                                onChange={(e) => setRating(e.target.value)}
                                name="rating"
                                id="rating"
                                value={rating}
                            >
                                <option value="disabled">Rating</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className='m-4'>
                    <label htmlFor="Review">Review</label>
                    <textarea className='w-full '
                        name=""
                        id="Review"
                        cols="30" rows="10"
                        value={reviewText}
                        onChange={(e) => setReviewText(e.target.value)}
                    ></textarea>
                </div>
                <button className='mx-4 rounded-full border-blue-200 bg-green-600 p-2 justify-end'
                    type='submit'
                    onClick={handleSubmitReview} >Submit</button>
            </form>
        </div>
    )
}

export default AddReviews