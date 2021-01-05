import React, {useState} from 'react'
import './NewSignUp.css'

const NewSignUp = () => {


    const [name, setName] = useState({firstname: '', lastname: ''})
    const [nameemail, setEmail] = useState({email: ''})
    const [namepass, setPassword] = useState({password: '', reenterpassword: ''})
    const [gender, setGender] = useState({Gender: ''})


    const submitHandler = e => {
        e.preventDefault()
        alert(`Hello ${name.firstname} ${name.lastname} ${nameemail.email}`)
    }


    return (
        <div className='image'>
            <div className='centered'>
                <form onSubmit={submitHandler}>
                    <div>
                        <input
                                type='text'
                                name ='firstname'
                                placeholder = 'firstname...'
                                value={name.firstname}
                                onChange={e => setName({firstname: e.target.value})}/>
                    </div>
                    <br/>
                    <div>
                        <input 
                                type='text'
                                name = 'lastname'
                                placeholder = 'lastname...'
                                value={name.lastname}
                                onChange={e => setName({lastname: e.target.value})}/>
                    </div>
                    <br/>
                    <div>
                        <input 
                                type='password'
                                name = 'password'
                                placeholder = 'password...'
                                value={namepass.password}
                                onChange={e => setPassword({password: e.target.value})}/>
                    </div>  
                    <br/>
                    <div>
                        <input 
                                type='password'
                                name = 're-enter-password'
                                placeholder = 're-enter-password...'
                                value={namepass.reenterpassword}
                                onChange={e => setPassword({reenterpassword: e.target.value})}/>
                    </div>  
                    <br/>
                    <div>
                        <input 
                                type='text'
                                name = 'email'
                                placeholder = 'email...'
                                value={nameemail.email}
                                onChange={e => setEmail({email: e.target.value})}/>
                    </div>  
                    <br/>
                    <button> Register </button>
                </form>
            </div>
        </div>
    )
}

export default NewSignUp