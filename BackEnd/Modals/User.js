const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"]
    },
    email:{
        type:String,
        required:[true,"Email is required"],
    },
    avatar:{
        public_id:String,
        url:String
    },
    posts:[{
        post:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"Post"
        }
    }],
    followers:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }],
    following:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }]

    
})
module.exports=mongoose.modelNames("User",UserSchema);