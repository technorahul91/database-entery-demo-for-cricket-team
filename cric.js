const express=require("express")
const app=express()
const clubInfo=require('./clubListSchema')
const mongoose=require('mongoose')
mongoose.connect('mongodb+srv://demo:CvxKFCWLrrX3Ueh6@cluster0.qnnyymq.mongodb.net/?retryWrites=true&w=majority/demo',

{
    useNewurlParser:true,
    useUnifiedTopology:true
}
)
app.get('/',(req,res)=>{
    res.json(clubInfo)
})
app.listen(5000)