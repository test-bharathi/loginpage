import React, {useState} from 'react'
import './Signup.css'

const SignUp = () => {


    const [name, setName] = useState({firstname: '', lastname: ''})
    const [email, setEmail] = useState({setEmail: ''})
    const[pass, setPassword] = useState({password: '', reenterpassword: ''})

  return (
    <div className='image'>
        <div className='wrapper'>
            <div className='centered'>
                <div className='container'>
                <div> User Register </div>
                <br/>
                <br/>
                    <form>
                        <div>
                            <b>FirstName</b>
                            <br/>
                            <br/>
                            <input
                            type='firstname'
                            placeholder = 'firstname...'
                            value={name.firstname}
                            onChange={e => setName({firstname: e.target.value})}/>
                        </div>
                        <br/>

                        <div>
                            <b>LastName</b>
                            <br/>
                            <br/>
                            <input
                            type='lastname'
                            placeholder = 'lastname...'
                            value={name.lastname}
                            onChange={e => setName({lastname: e.target.value})}/>
                        </div>
                        <br/>

                        <div>
                            <b>Password</b>
                            <br/>
                            <br/>
                            <input
                            type='password'
                            placeholder = 'password...'
                            value={name.password}
                            onChange={e => setName({password: e.target.value})}/>
                        </div>
                        <br/>

                        <div>
                            <b>ReEnterPassword</b>
                            <br/>
                            <br/>
                            <input
                            type='reenterpassword'
                            placeholder = 'reenterpassword...'
                            value={name.ReEnterPassword}
                            onChange={e => setName({ReEnterPassword: e.target.value})}/>
                        </div>
                        <br/>

                        <div>
                            <b>Email</b>
                            <br/>
                            <br/>
                            <input
                            type='email'
                            placeholder = 'email...'
                            value={name.email}
                            onChange={e => setName({email: e.target.value})}/>
                        </div>
                        <br/>
                        <button type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}
export default SignUp