import mongoose from "mongoose";
const { Schema } = mongoose;

const placeSchema = new Schema({
  text: { type: String },
  name: { type: String },
  //   text: { type: String, required: true },
  //   name: { type: String, required: true },
});

const Place = mongoose.models.Place || mongoose.model("Place", placeSchema);

export default Place;
