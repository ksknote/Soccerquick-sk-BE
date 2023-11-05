const { Schema } = require('mongoose');

const playerSchema = {
  id: { type: Schema.Types.ObjectId, ref: 'User' },
  name: { type: String, ref: 'User.name' },
  profile: {
    type: String,
    ref: 'User.profile',
    required: true,
  },
  phone_number: {
    type: String,
    ref: 'User.phone_number',
  },
  gender: { type: String, ref: 'User.gender' },
  position: { type: String, required: true },
  level: { type: String, required: true },
  contents: { type: String, required: true },
  status: {
    type: String,
    ref: 'User.applicant_status',
  },
};

module.exports = playerSchema;
