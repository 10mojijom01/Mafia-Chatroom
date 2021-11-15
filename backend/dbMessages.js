import mongoose from 'mongoose'

const mafiachatSchema = mongoose.Schema({

    message: String,
    name: String,
    timestamp: String,
    text_align_right: Boolean,
    sender_userid:String,
})

export default mongoose.model("messagecontents", mafiachatSchema )