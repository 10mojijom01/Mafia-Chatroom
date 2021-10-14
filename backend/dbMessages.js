import mongoose from 'mongoose'

const mafiachatSchema = mongoose.Schema({

    message: String,
    name: String,
    timestamp: String,
    received: Boolean,
    text_align_right: Boolean
})

export default mongoose.model("messagecontents", mafiachatSchema )