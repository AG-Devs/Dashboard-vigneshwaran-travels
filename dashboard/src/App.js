import './App.css';
import { useState } from 'react';
import Header from './HomeComponents/Header.js'
import Feedback from './HomeComponents/Feedback.js'
import Booking from './HomeComponents/Booking.js'
import {Link,Routes,Route} from 'react-router-dom'

function App() {
    const [feedback,setfeedback] = useState(true)
    const [booking,setbooking] = useState(false)

    const handleFeedback = (e)=>{
        e.preventDefault()
        setfeedback(true)
        setbooking(false)
    }

    const handleBooking = (e)=>{
        e.preventDefault()
        setfeedback(false)
        setbooking(true)
    }

  return (
    <div className="App">

          <Routes>
                <Route path='/' element={<Header />}>
                        <Route index element={<Feedback />} />
                        <Route path='/bookings' element={<Booking />} />
                </Route>
          </Routes>

          <button className={feedback ? 'feedbackBtn' : 'feedbackBtn2' } onClick={(e)=>{handleFeedback(e)}}><Link to='/' className={feedback ? 'feedbackBtn' : 'feedbackBtn2' }><p>Feedbacks</p></Link></button>
          <button className={booking ? 'bookingBtn' : 'bookingBtn2' } onClick={(e)=>{handleBooking(e)}}><Link to='/bookings' className={booking ? 'bookingBtn' : 'bookingBtn2' }><p>Bookings</p></Link></button>
    </div>
  );
}

export default App;
