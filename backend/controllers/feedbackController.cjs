const Feed=require('../models/feedbackModel.cjs')

const usersFeed= async(req,res)=>{
  try{
     const data = await Feed.find({})
     res.send(data)
}
catch(err){
  res.json('error')
}
}

module.exports={usersFeed}