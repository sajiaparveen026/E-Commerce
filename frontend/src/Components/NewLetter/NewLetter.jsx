import React from 'react'
import './NewLetter.css'

const NewLetter = () => {
  return (
    <div className='newsletter'>
        <h1>Get Exclusive Offer On you Email</h1>
        <p>Subscribe to Our News Letter and stay updates</p>
        <div>
            <input type="email" placeholder='Your Email ID' />
            <button>Subscribe</button>
        </div>
    </div>
  )
}

export default NewLetter