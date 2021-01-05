import React, { useState, useEffect} from 'react'
import axios from 'axios'

function FetchData() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        axios.get('http://127.0.0.1:5000/user')
        .then(res => {
            console.log(res)
            setPosts(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    })
    return (
        <div>
            {posts}
        </div>
    )
}

export default FetchData

