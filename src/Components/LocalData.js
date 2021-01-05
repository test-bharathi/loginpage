import React, { useState, useEffect } from 'react'
import axios from 'axios'

const LocalData = () => {
    const [username, setUsername] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        setUsername(e.target.elements.form1.value)
        axios.post('http://localhost:3000/api', { name: username })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="form1" placeholder="Enter name:" />
                <button type="submit">Submit</button>
            </form>
        </div >
    )
}

export default LocalData