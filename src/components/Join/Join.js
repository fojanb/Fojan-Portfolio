import React from 'react'

const Join = () => {
    return (
        <form action="" className="grid grid-cols-1 m-auto w-80 m-40 gap-8 bg-secondary rounded bg-opacity-20 p-8">
            <input type="text" placeholder="First Name" name="fname" id="fname" className="h-10 p-4 border rounded m-auto"/>
            <input type="text" placeholder="Last Name" name="lname" id="fname" className="h-10 p-4 border rounded m-auto"/>
            <input type="email" placeholder="Email" name="email" id="email" className="h-10 p-4 border rounded m-auto"/>
            <input type="number" placeholder="Phone Number" name="phone" id="phone" className="h-10 p-4 border rounded m-auto"/>
            <input type="text" placeholder="Postal Code" name="pcode" id="pcode" className="h-10 p-4 border rounded m-auto"/>
            <button type="submit" className="bg-secondary font-bold border rounded m-auto text-lg px-8 py-2 text-gray-100 transform hover:scale-110 hover:transition duration-500 ease-in-out sm:text-sm sm:w-40 sm:h-10 sm:mb-5">Submit</button>
        </form>
    )
}

export default Join
