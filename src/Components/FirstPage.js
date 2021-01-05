import React, {useState} from 'react'
import './FirstPage.css'

function FirstPage() {



    return (
            <div> <b>Welcome to SportsClub</b>
                <div className='image'>
                    <div className='centered'>
                        <div>
                            <button type='submit'> <b> LogIn </b></button>
                        </div>
                        <div>
                            <button type='submit'> <b> SignUp </b></button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default FirstPage