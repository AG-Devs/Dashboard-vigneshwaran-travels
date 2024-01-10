const Book=require('../models/bookingModel.cjs')

const usersBook= async(req,res)=>{
        try{
           const data = await Book.find({})
           res.send(data)
      }
      catch(err){
        res.json('error')
      }
}

module.exports={usersBook}