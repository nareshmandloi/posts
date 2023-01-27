import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Comments = () => {

    const [comments, setComments] = useState();

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1/comments').then((res) => {
            setComments(res.data);
        }).catch((err) => {
            console.log(err);
        })
    }, []);


    return (
        <div>
            <h3>Comments</h3>
            
        </div>
    )
}

export default Comments