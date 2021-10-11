import mongoose from 'mongoose'

const mafiachatSchema = mongoose.Schema({

    message: String,
    name: String,
    timestamp: String,
    received: Boolean

})

export default mongoose.model("messagecontents", mafiachatSchema )