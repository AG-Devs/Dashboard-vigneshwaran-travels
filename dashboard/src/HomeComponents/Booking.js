import React from 'react'
import './Booking.css'
import {useState,useEffect} from 'react'
import axios from 'axios'

const Booking = () => {
    const [usersBooking,setusersBooking] = useState([])

    useEffect(()=>{
        axios.get('https://dashboard-vigneshwaran-travels.onrender.com/customer/booking')
        .then(res =>{
            console.log('done')
            setusersBooking(res.data)
        })
    },[])

    const usersBooking2 = usersBooking.slice(0).reverse()

  return (
    <div className='booking'>
        {usersBooking2.map((single)=>(
            <div className='bookingDisplay'>
                <h3>{single.name}</h3>
                <p>Contact : {single.no}</p>
                <p>Date : {single.date}</p>
                <p>Pickup Location : {single.pickup}</p>
            </div>
        ))}
    </div>
  )
}

export default Booking