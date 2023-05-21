

const express = require('express');

const {sequelize} = require('../config/db')

const router = express.Router();

router.get("/" , async (req , res) =>{
    try {

        const persons = await sequelize.query("SELECT * FROM persons")
        res.send(persons[0])
        res.end();
        
    } catch (error) {
 
        console.log("Error fetching persons" , error)
        res.status(500).send('Error fetching persons')
        
    }
})

module.exports = router