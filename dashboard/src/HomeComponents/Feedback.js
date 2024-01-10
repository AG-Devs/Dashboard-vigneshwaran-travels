import React from 'react'
import './Feedback.css'
import {useState,useEffect} from 'react'
import axios from 'axios'

const Feedback = () => {
    const [usersFeedback,setusersFeedback] = useState([])

    useEffect(()=>{
        axios.get('https://dashboard-vigneshwaran-travels.onrender.com/users/feedbacks')
        .then(res =>{
            console.log('done')
            setusersFeedback(res.data)
        })
    },[])

    const usersFeedback2 = usersFeedback.slice(0).reverse()

  return (
    <div className='feedback'>
        {usersFeedback2.map((single)=>(
            <div className='feedbackDisplay'>
                <h3>{single.name}</h3>
                <p>{single.feedback}</p>
            </div>
        ))}
    </div>
  )
}

export default Feedback