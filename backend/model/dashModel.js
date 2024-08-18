import mongoose from "mongoose";


const dashSchema = new mongoose.Schema({
    api_url:{
        type: String,
        required: true
    },
    vuln:{
        type: String,
        required: true
    },
    status:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    solution:{
        type: String,
        required: true
    },
    others:{
        type: String,
        required: true
    },
    
})


export default mongoose.model("Dash", dashSchema);