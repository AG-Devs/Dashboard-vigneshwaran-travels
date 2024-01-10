const mongoose=require('mongoose')


const feedBackschema=new mongoose.Schema(
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
    feedback:
    {
        type:String,
        required:true
    }
})

module.exports=mongoose.model('feedback',feedBackschema)