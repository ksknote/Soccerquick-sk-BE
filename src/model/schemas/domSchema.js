const { Schema } = require('mongoose');

const stadiumSchema = {
  id: { type: Number },
  name: { type: String },
  size_x: { type: Number },
  size_y: { type: Number },
  rental: { type: Boolean },
  inout_door: { type: String },
  inout_door_nm: { type: String },
  stadium_type: { type: String },
  stadium_type_nm: { type: String },
  images: [
    {
      id: { type: Number },
      image: { type: String },
      is_thumbnail: { type: Boolean },
      is_ad: { type: Boolean },
      stadium: { type: Number },
    },
  ],
  info: { type: String },
};

const domSchema = new Schema({
  dom_id: {
    type: String,
    required: true,
  },
  title: { type: String },
  address: {
    area: { type: String },
    fullAddress: { type: String },
  },
  source: { type: String },
  stadiums: {
    type: [stadiumSchema],
    default: [],
  },
  lat: { type: Number },
  lng: { type: Number },
  parking: { type: Boolean },
  parking_free: { type: Boolean },
  parking_fee: { type: String },
  bibs: { type: Boolean },
  beverage: { type: Boolean },
  partnership: { type: Boolean },
  shower: { type: Boolean },
  shoes: { type: Boolean },
  wear: { type: Boolean },
  ball: { type: Boolean },
  toilet: { type: Number },
  url: { type: String },
});

module.exports = domSchema;
