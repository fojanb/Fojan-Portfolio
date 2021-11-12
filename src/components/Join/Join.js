import React from 'react'

const Join = () => {
    return (
        <form className="grid grid-cols-1 m-auto w-80">
            <input type="text" placeholder="First Name" name="fname" id="fname"/>
            <input type="text" placeholder="Last Name" name="lname" id="fname"/>
            <input type="email" placeholder="Email" name="email" id="email"/>
            <input type="number" placeholder="Phone Number" name="phone" id="phone"/>
            <input type="text" placeholder="Postal Code" name="pcode" id="pcode"/>
            <button type="submit">Submit</button>
        </form>
    )
}

export default Join
