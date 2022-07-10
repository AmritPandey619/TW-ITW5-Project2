const express = require('express')
const router = new express.Router()
const User = require('../models/user')
const auth = require('../middleware/auth')

router.post('/signup', async (req,res)=>{ 
    console.log(req.body);
    const email = req.body.email
    let user=await User.findOne({email})
    if(user){
        
       res.render('error')
    }
    user = new User(req.body) 
    try{
        await user.save() 
        const token =await user.generateAuthToken()
        res.status(201).render('index')
    }
    catch(e){
        res.status(400).send(e)
    }
})

router.post('/login', async (req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.send({user,token})
    }catch(e){
        res.status(400).send()
    }
})

module.exports = router