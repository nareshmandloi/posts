import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './style.css'

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
            {comments ? (
                comments.map((comment) => {
                    return (<div className="card">
                    <p style={{ fontWeight: "700" }}>Title: {comment.name}</p>
                    <br />
                    <p>Description: {comment.body}</p>
                  </div>);
                    
                })
            ) : (
                <p>Loading...</p>
            )}
        </div>
    )
}

export default Comments