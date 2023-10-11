import mongoose from "mongoose";

const paintingsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  artist: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  description: String,
  imageUrl: String,
});

export default mongoose.model("Paintings", paintingsSchema);
