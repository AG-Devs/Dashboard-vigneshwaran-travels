const mongoose=require('mongoose')


const bookSchema=new mongoose.Schema(
    {name:
    {
        type:String,
        required:true
    },
    no:
    {
        type:String,
        required:true

    },
    date:
    {
        type:String,
        required:true
    },
    pickup:{
        type:String,
        required:true
    }
})

module.exports=mongoose.model('booking',bookSchema)