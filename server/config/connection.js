
const {sequelize} = require("./db")

module.exports = {
    getConnection : () =>{
        return sequelize
    }
}