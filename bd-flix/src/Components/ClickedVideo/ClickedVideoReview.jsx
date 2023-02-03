import React, { useState } from 'react';
import { useContext } from 'react';
import { toast } from 'react-toastify';
import { AuthContext } from '../Context/Authprovider/Authprovider';

const ClickedVideoReview = ({ data }) => {
    const [loading, setloading] = useState(false)

    const { user } = useContext(AuthContext)

    const handleReview = event => {
        event.preventDefault();
        const form = event.target;
        const email = user.email;
        const name = user.displayName;
        const image = user.photoURL;
        const comments = form.comments.value;
        const rating = form.rating.value;
        const postId = data._id;

        const review = {
            email,
            name,
            image,
            comments,
            rating,
            postId
        }

        console.log(review)

        fetch('http://localhost:5000/review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledge) {
                    form.reset();
                    toast.success("Thanks for your review and rating")
                }
            })
            .catch(error => console.log(error))
    }
    return (
        <div>
            <form onSubmit={handleReview} className="card-body">
                <textarea name="comments" id="" cols="3" rows="5" placeholder="Share Review about the Movie"></textarea>
                <div className='flex justify-between'>
                    <input name="rating" className='w-24 h-12' type="text" placeholder="Rating" />
                    <input type="submit" className="btn btn-primary text-green-700 hover:text-green-400 w-24 lg:text-2xl  focus:outline-none " value={loading ? "loading..." : 'Review'} />
                </div>
            </form>
        </div>
    );
};

export default ClickedVideoReview;