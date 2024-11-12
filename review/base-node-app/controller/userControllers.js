// Models Import
const User = require('../models/user.js')

// Get userS
const getUsers = async (req, res) => {
    try{
        const users = await User.find();
        if (!users) {
            return res.status(404).send({
                status: "error",
                message: "No users found"
            })
        }

        res.status(200).send({
            status:"sucess",
            data: users
        })
    } catch (error) {
        console.log(error);

        res.status(500).send({
            status: "error",
            message: "error fetching userS"
        })
        
    }
}

// Get useR by ID
const getUserByID = async (req, res) => {
    try{
        const user = await User.findById(req.params.id);
        console.log(user);
        
        if (!user){
            return res.status(404).send({
                status: "error",
                message: "User not found"
            })
        }

        res.status(200).send({
            status:"sucess",
            data: user
        })
    } catch (error) {
        console.log(error);

        if (error.kind === "ObjectId"){
            return res.status(400).send({
                status: "error",
                message: "Invalid ID"
            })
        }

        res.status(500).send({
            status: "error",
            message: "fetching user"
        })
        
    }
}

// Create user
const createUser = async (req, res) => {
    try{
        const  { Name, Birthday } = req.body
        if (!Name || !Birthday){
            return res.status(400).send({
                status: "error",
                message: "One of the fiels is missing" 
            })
        }

    const newUser = new User({
        Name, 
        Birthday 
    });
      
    await newUser.save()

    res.send({
        status: "sucess",
        data: newUser
    });
} catch(error){
    console.log(error)
    if (error?.errorResponse?.code=== 11000){
        res.status(400).send({
            status: "Failed",
            message: "User already exists"
        })
    }
    res.status(500)
    }
};

// Update user
const updateUser = async (req, res) => {
    try {
        const { Name, Birthday } = req.body;

        
        if (!Name || !Birthday) {
            return res.status(400).send({
                status: "error",
                message: "One of the fields is missing"
            });
        }

        
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            { Name, Birthday },
            { new: true } 
        );

        if (!updatedUser) {
            return res.status(404).send({
                status: "error",
                message: "User not found"
            });
        }

        res.status(200).send({
            status: "success",
            data: updatedUser
        });
    } catch (error) {
        console.log(error);

        if (error.code === 11000) {
            return res.status(400).send({
                status: "error",
                message: "Duplicated entry"
            });
        }

        res.status(500).send({
            status: "error",
            message: "Error updating the user :("
        });
    }
};

//Patching
const patchingToUser = async (req, res) => {
    try {
        const { Name, Birthday } = req.body;
        
        if (!Name && !Birthday) {
            return res.status(400).send({
                status: "error",
                message: "One of the fields must be changed"
            });
        }
        
        const updatedUser = await User.findByIdAndUpdate(
            req.params.id, 
            { Name, Birthday },
            { new: true } 
        );
        if (!updatedUser) {
            return res.status(404).send({
                status: "error",
                message: "User not found"
            });
        }

        res.status(200).send({
            status: "success",
            data: updatedUser
        });
    } catch (error) {
        console.log(error);

        if (error.code === 11000) {
            return res.status(400).send({
                status: "error",
                message: "Duplicated entry"
            });
        }

        res.status(500).send({
            status: "error",
            message: "Error updating the user :("
        });
    }
};

// Delete user
const deleteUser = async (req, res) => {
    try{
        const user = await User.findByIdAndDelete(req.params.id);
        
        if (!user){
            return res.status(404).send({
                status: "error",
                message: "User not found"
            })
        }

        res.status(200).send({
            status:"sucess",
            data: user
        })
    } catch (error) {
        console.log(error);

        if (error.kind === "ObjectId"){
            return res.status(400).send({
                status: "error",
                message: "Invalid ID"
            })
        }

        res.status(500).send({
            status: "error",
            message: "could not delete user"
        })
        
    }
}

module.exports = {
    createUser,
    getUsers,
    getUserByID,
    updateUser,
    deleteUser,
    patchingToUser
}