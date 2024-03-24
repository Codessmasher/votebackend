import mongoose from "mongoose";
import bcrypt from "bcryptjs";

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    adhaarNumber: {
        type: Number,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        enum: ["voter", "admin"],
        default: "voter"
    },
    isVoted: {
        type: Boolean,
        default: false
    }
})

userSchema.pre("save", function(next){
    const user=this;
    if (!user.isModified("password")) return next();
    try {
        const hashedpassword = bcrypt.hashSync(user.password, 10);
        user.password = hashedpassword;
        next();
    } catch (error) {
        console.log(error);
        return next(error);
    }
})
 
userSchema.methods.comparePassword = function(pass){
    try {
        const isMatched = bcrypt.compareSync(pass, this.password);
        return isMatched;
    } catch (error) {
        console.log(error);
        return error; 
    }
}

userSchema.methods.setVoted = function() {
    this.isVoted = true;
    return this.save();
};

const User = mongoose.model("User", userSchema);
export default User;