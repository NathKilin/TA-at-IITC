// Models Import
const User = require('../models/userModel.js')

const creatUser = async (req, res) => {
    try{

        const  { fName, lName, phoneNumber, email } = req.body
        if (!fName || !lName || !phoneNumber || !email){
            res.status(400).send({
                status: "error",
                message: "One of the fiels is missing" 
            })
        }

    const newUser = new User({
        fName,
        lName,
        phoneNumber,
        email
    });
    
    await newUser.save()
    
    res.send({
        status: "sucess",
        data: newUser
    });
} catch(error){
    console.log(error)
    res.status(500).send("Internal Server Error")
    }
};
    


module.exports = {
    createUser
}