import React, {useState} from 'react'
import './Login.css'

function LogIn() {

    const [name, setName] = useState({username: ''})
    const [pass, setPassword] = useState({password: ''})

    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${name.firstname}`)
    }

    return (
        <div className='loginimage'>
            <div className='centered'>
                <form onSubmit={submitHandler}>
                    <div>
                        <input
                                type='text'
                                placeholder = 'username...'
                                value={name.firstname}
                                onChange={e => setName({firstname: e.target.value})}/>
                    </div>
                    <br/>
                    <div>
                        <input 
                                type='password'
                                placeholder = 'password...'
                                value={pass.password}
                                onChange={e => setPassword({password: e.target.value})}/>
                    </div>  
                    <br/>
                    <button type='submit'> LogIn </button>
                    
                </form>
            </div>
        </div>
    )

}

export default LogIn