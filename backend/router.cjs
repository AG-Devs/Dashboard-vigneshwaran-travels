const express=require('express')
const router=express.Router()
const feed=require('./controllers/feedbackController.cjs')
const book=require('./controllers/bookingController.cjs')

router.get("/feedbacks",feed.usersFeed)
router.get("/booking",book.usersBook)


module.exports=router