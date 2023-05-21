const express = require("express")

const {sequelize} = require("../config/db");

const router = express.Router();

router.post("/" , async(req,res)=>{
   
    try {
        const {Id, Title } = req.body
        
        await sequelize.query(
            `INSERT INTO persons (Id, Title) VALUES (${Id}, '${Title}')`
        )

        res.send({insert : "success"})
        res.end();

    } catch (error) {

        console.error("Error inserting persons:",error)
        res.send({insert : "fail"})
    }
})

module.exports = router 
